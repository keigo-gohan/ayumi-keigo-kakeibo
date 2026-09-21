/**
 * Firebase Realtime DB + localStorage ハイブリッドラッパー
 * 
 * - 読み書きはFirebaseに直接アクセス
 * - localStorageをキャッシュとして使用（オフライン時のフォールバック）
 * - Supabase互換のチェーンAPI
 * 
 * Firebase URL設定:
 *   初回アクセス時にUIから設定、localStorageに保存
 */

class LocalDB {
  constructor(storageKey = 'kakeibo_records') {
    this.storageKey = storageKey;
    this._nextIdKey = storageKey + '_next_id';
    this._firebaseUrlKey = 'kakeibo_firebase_url';
  }

  // Firebase URL
  getFirebaseUrl() {
    return localStorage.getItem(this._firebaseUrlKey) || '';
  }

  setFirebaseUrl(url) {
    // URLを正規化（末尾スラッシュ除去）
    url = url.replace(/\/+$/, '');
    localStorage.setItem(this._firebaseUrlKey, url);
  }

  isFirebaseConfigured() {
    return !!this.getFirebaseUrl();
  }

  // ---- Firebase REST API ----
  async _firebaseFetch(path, options = {}) {
    const baseUrl = this.getFirebaseUrl();
    if (!baseUrl) throw new Error('Firebase URL not configured');

    const url = `${baseUrl}/${path}.json`;
    const response = await fetch(url, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers }
    });

    if (!response.ok) {
      throw new Error(`Firebase error: ${response.status} ${response.statusText}`);
    }
    return response.json();
  }

  async _firebaseGetAll() {
    try {
      const data = await this._firebaseFetch('records');
      if (!data) return [];
      // Firebaseはオブジェクト形式で返すので配列に変換
      const records = Object.values(data);
      // localStorageキャッシュを更新
      this._saveLocal(records);
      return records;
    } catch (e) {
      console.warn('Firebase read failed, using local cache:', e.message);
      return this._loadLocal();
    }
  }

  async _firebasePut(record) {
    try {
      await this._firebaseFetch(`records/${record.id}`, {
        method: 'PUT',
        body: JSON.stringify(record)
      });
    } catch (e) {
      console.warn('Firebase write failed:', e.message);
    }
  }

  async _firebaseDelete(id) {
    try {
      await this._firebaseFetch(`records/${id}`, { method: 'DELETE' });
    } catch (e) {
      console.warn('Firebase delete failed:', e.message);
    }
  }

  async _firebaseGetNextId() {
    try {
      const data = await this._firebaseFetch('meta/next_id');
      return data || 600;
    } catch (e) {
      return this._getLocalNextId();
    }
  }

  async _firebaseSetNextId(id) {
    try {
      await this._firebaseFetch('meta/next_id', {
        method: 'PUT',
        body: JSON.stringify(id)
      });
    } catch (e) {
      console.warn('Firebase next_id update failed:', e.message);
    }
  }

  // ---- localStorage (キャッシュ/フォールバック) ----
  _loadLocal() {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  _saveLocal(records) {
    localStorage.setItem(this.storageKey, JSON.stringify(records));
  }

  _getLocalNextId() {
    return parseInt(localStorage.getItem(this._nextIdKey) || '600', 10);
  }

  _setLocalNextId(id) {
    localStorage.setItem(this._nextIdKey, String(id));
  }

  // ---- 公開API ----
  from(tableName) {
    return new QueryBuilder(this);
  }

  hasData() {
    return this._loadLocal().length > 0;
  }

  loadInitialData(records) {
    this._saveLocal(records);
    const maxId = records.reduce((max, r) => Math.max(max, r.id || 0), 0);
    this._setLocalNextId(maxId + 1);
  }

  /** 初期データをFirebaseにアップロード */
  async uploadToFirebase() {
    const records = this._loadLocal();
    if (records.length === 0) return;

    const obj = {};
    records.forEach(r => { obj[r.id] = r; });

    await this._firebaseFetch('records', {
      method: 'PUT',
      body: JSON.stringify(obj)
    });

    const maxId = records.reduce((max, r) => Math.max(max, r.id || 0), 0);
    await this._firebaseSetNextId(maxId + 1);
  }
}

class QueryBuilder {
  constructor(db) {
    this._db = db;
    this._operation = null;
    this._insertData = null;
    this._updateData = null;
    this._filters = [];
    this._negFilters = [];
    this._selectAfterInsert = false;
  }

  select(columns) {
    if (this._operation === 'insert') {
      this._selectAfterInsert = true;
      return this;
    }
    this._operation = 'select';
    return this;
  }

  insert(data) {
    this._operation = 'insert';
    this._insertData = Array.isArray(data) ? data : [data];
    return this;
  }

  update(data) {
    this._operation = 'update';
    this._updateData = data;
    return this;
  }

  delete() {
    this._operation = 'delete';
    return this;
  }

  eq(field, value) {
    this._filters.push({ field, value });
    return this;
  }

  neq(field, value) {
    this._negFilters.push({ field, value });
    return this;
  }

  _matchesFilters(record) {
    for (const f of this._filters) {
      if (String(record[f.field]) !== String(f.value)) return false;
    }
    for (const f of this._negFilters) {
      if (String(record[f.field]) === String(f.value)) return false;
    }
    return true;
  }

  async then(resolve, reject) {
    try {
      const result = await this._execute();
      resolve(result);
    } catch (e) {
      if (reject) reject(e);
      else throw e;
    }
  }

  async _execute() {
    const useFirebase = this._db.isFirebaseConfigured();

    switch (this._operation) {
      case 'select':
        return this._execSelect(useFirebase);
      case 'insert':
        return this._execInsert(useFirebase);
      case 'update':
        return this._execUpdate(useFirebase);
      case 'delete':
        return this._execDelete(useFirebase);
      default:
        return { data: null, error: null };
    }
  }

  async _execSelect(useFirebase) {
    let records;
    if (useFirebase) {
      records = await this._db._firebaseGetAll();
    } else {
      records = this._db._loadLocal();
    }
    const filtered = records.filter(r => this._matchesFilters(r));
    return { data: filtered, error: null };
  }

  async _execInsert(useFirebase) {
    const newRecords = [];
    let nextId;

    if (useFirebase) {
      nextId = await this._db._firebaseGetNextId();
    } else {
      nextId = this._db._getLocalNextId();
    }

    for (const item of this._insertData) {
      const newRecord = {
        ...item,
        id: nextId,
        created_at: new Date().toISOString()
      };
      newRecords.push(newRecord);
      nextId++;
    }

    // ローカルキャッシュ更新
    const local = this._db._loadLocal();
    local.push(...newRecords);
    this._db._saveLocal(local);
    this._db._setLocalNextId(nextId);

    // Firebase更新
    if (useFirebase) {
      for (const r of newRecords) {
        await this._db._firebasePut(r);
      }
      await this._db._firebaseSetNextId(nextId);
    }

    if (this._selectAfterInsert) {
      return { data: newRecords, error: null };
    }
    return { data: null, error: null };
  }

  async _execUpdate(useFirebase) {
    const records = useFirebase
      ? await this._db._firebaseGetAll()
      : this._db._loadLocal();

    const updatedRecords = [];
    for (let i = 0; i < records.length; i++) {
      if (this._matchesFilters(records[i])) {
        records[i] = { ...records[i], ...this._updateData };
        updatedRecords.push(records[i]);
      }
    }

    // ローカル保存
    this._db._saveLocal(records);

    // Firebase更新
    if (useFirebase) {
      for (const r of updatedRecords) {
        await this._db._firebasePut(r);
      }
    }

    return { data: null, error: null };
  }

  async _execDelete(useFirebase) {
    const records = useFirebase
      ? await this._db._firebaseGetAll()
      : this._db._loadLocal();

    const toDelete = records.filter(r => this._matchesFilters(r));
    const remaining = records.filter(r => !this._matchesFilters(r));

    // ローカル保存
    this._db._saveLocal(remaining);

    // Firebase削除
    if (useFirebase) {
      for (const r of toDelete) {
        await this._db._firebaseDelete(r.id);
      }
    }

    return { data: null, error: null };
  }
}
