const INITIAL_DATA = [
  {
    "id": 285,
    "created_at": "2026-08-12 01:16:02.17673+00",
    "amount": "55050",
    "title": "家賃",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 288,
    "created_at": "2026-08-12 01:16:32.576191+00",
    "amount": "60000",
    "title": "食費",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 291,
    "created_at": "2026-08-12 01:16:53.589945+00",
    "amount": "20000",
    "title": "光熱費",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 292,
    "created_at": "2026-08-12 01:17:04.491352+00",
    "amount": "15000",
    "title": "日用品",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 293,
    "created_at": "2026-08-12 01:17:20.420575+00",
    "amount": "5720",
    "title": "WIFI",
    "category": "共用費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 294,
    "created_at": "2026-08-12 01:17:41.698864+00",
    "amount": "10000",
    "title": "贅沢費",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 295,
    "created_at": "2026-08-12 01:17:56.729825+00",
    "amount": "3000",
    "title": "お薬代",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 296,
    "created_at": "2026-08-12 01:18:12.216796+00",
    "amount": "35000",
    "title": "あゆ親",
    "category": "共用費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 297,
    "created_at": "2026-08-12 01:18:29.610327+00",
    "amount": "10000",
    "title": "通院交通費",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 298,
    "created_at": "2026-08-12 01:19:03.621799+00",
    "amount": "35000",
    "title": "お小遣い(あゆみ)",
    "category": "共用費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 299,
    "created_at": "2026-08-12 01:19:18.406562+00",
    "amount": "35000",
    "title": "お小遣い(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 302,
    "created_at": "2026-08-12 01:20:55.199079+00",
    "amount": "8230",
    "title": "定期代(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 303,
    "created_at": "2026-08-12 01:21:08.772737+00",
    "amount": "11960",
    "title": "定期代(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 304,
    "created_at": "2026-08-12 01:21:34.669979+00",
    "amount": "4000",
    "title": "保険料",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 305,
    "created_at": "2026-08-12 01:21:55.367674+00",
    "amount": "9300",
    "title": "通信費(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 306,
    "created_at": "2026-08-12 01:22:12.958703+00",
    "amount": "3800",
    "title": "通信費(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 307,
    "created_at": "2026-08-12 01:22:37.148954+00",
    "amount": "890",
    "title": "Netflix",
    "category": "サブスク",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 308,
    "created_at": "2026-08-12 01:22:53.763998+00",
    "amount": "600",
    "title": "アマプラ",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 309,
    "created_at": "2026-08-12 01:23:02.597608+00",
    "amount": "1100",
    "title": "NHK",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 310,
    "created_at": "2026-08-12 01:23:22.230047+00",
    "amount": "10000",
    "title": "NISA(あゆみ)",
    "category": "投資",
    "payer": "麻由美",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 335,
    "created_at": "2026-08-12 01:26:30.066234+00",
    "amount": "15000",
    "title": "NISA(慶吾)",
    "category": "投資",
    "payer": "慶吾",
    "date": "template",
    "type": "expense"
  },
  {
    "id": 336,
    "created_at": "2026-08-12 01:27:11.491122+00",
    "amount": "220000",
    "title": "給料(あゆみ)",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "income"
  },
  {
    "id": 337,
    "created_at": "2026-08-12 01:27:31.28359+00",
    "amount": "350000",
    "title": "給料(慶吾)",
    "category": "共用費",
    "payer": "共通",
    "date": "template",
    "type": "income"
  },
  {
    "id": 407,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "55050",
    "title": "家賃",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 408,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "60000",
    "title": "食費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 409,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "20000",
    "title": "光熱費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 410,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "15000",
    "title": "日用品",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 411,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "5720",
    "title": "WIFI",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 412,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "10000",
    "title": "贅沢費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 413,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "3000",
    "title": "お薬代",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 414,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "35000",
    "title": "あゆ親",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 415,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "10000",
    "title": "通院交通費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 416,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "35000",
    "title": "お小遣い(あゆみ)",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 417,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "35000",
    "title": "お小遣い(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 418,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "8230",
    "title": "定期代(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 419,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "11960",
    "title": "定期代(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 420,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "4000",
    "title": "保険料",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 421,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "9300",
    "title": "通信費(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 422,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "3800",
    "title": "通信費(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 423,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "890",
    "title": "Netflix",
    "category": "サブスク",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 424,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "600",
    "title": "アマプラ",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 425,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "1100",
    "title": "NHK",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 426,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "10000",
    "title": "NISA(あゆみ)",
    "category": "投資",
    "payer": "麻由美",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 427,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "15000",
    "title": "NISA(慶吾)",
    "category": "投資",
    "payer": "慶吾",
    "date": "2026-08-01",
    "type": "expense"
  },
  {
    "id": 428,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "220000",
    "title": "給料(あゆみ)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "income"
  },
  {
    "id": 429,
    "created_at": "2026-08-12 03:38:45.464279+00",
    "amount": "364050",
    "title": "給料(慶吾)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-08-01",
    "type": "income"
  },
  {
    "id": 430,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "55050",
    "title": "家賃",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 431,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "60000",
    "title": "食費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 432,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "20000",
    "title": "光熱費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 433,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "15000",
    "title": "日用品",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 434,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "5720",
    "title": "WIFI",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 435,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "10000",
    "title": "贅沢費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 436,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "3000",
    "title": "お薬代",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 437,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "35000",
    "title": "あゆ親",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 439,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "35000",
    "title": "お小遣い(あゆみ)",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 440,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "35000",
    "title": "お小遣い(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 441,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "8230",
    "title": "定期代(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 442,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "11960",
    "title": "定期代(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 443,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "4000",
    "title": "保険料",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 444,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "9300",
    "title": "通信費(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 445,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "3800",
    "title": "通信費(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 446,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "890",
    "title": "Netflix",
    "category": "サブスク",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 447,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "600",
    "title": "アマプラ",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 448,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "1100",
    "title": "NHK",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 449,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "10000",
    "title": "NISA(あゆみ)",
    "category": "投資",
    "payer": "麻由美",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 450,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "15000",
    "title": "NISA(慶吾)",
    "category": "投資",
    "payer": "慶吾",
    "date": "2026-07-01",
    "type": "expense"
  },
  {
    "id": 451,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "210000",
    "title": "給料(あゆみ)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "income"
  },
  {
    "id": 452,
    "created_at": "2026-08-12 03:41:08.346875+00",
    "amount": "359050",
    "title": "給料(慶吾)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-07-01",
    "type": "income"
  },
  {
    "id": 453,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "55050",
    "title": "家賃",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 454,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "60000",
    "title": "食費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 455,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "20000",
    "title": "光熱費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 456,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "15000",
    "title": "日用品",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 457,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "5720",
    "title": "WIFI",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 458,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "10000",
    "title": "贅沢費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 459,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "3000",
    "title": "お薬代",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 460,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "35000",
    "title": "あゆ親",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 462,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "35000",
    "title": "お小遣い(あゆみ)",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 463,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "35000",
    "title": "お小遣い(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 464,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "8230",
    "title": "定期代(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 465,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "11960",
    "title": "定期代(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 466,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "4000",
    "title": "保険料",
    "category": "必要経費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 467,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "9300",
    "title": "通信費(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 468,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "3800",
    "title": "通信費(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 469,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "890",
    "title": "Netflix",
    "category": "サブスク",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 470,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "600",
    "title": "アマプラ",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 471,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "1100",
    "title": "NHK",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 472,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "10000",
    "title": "NISA(あゆみ)",
    "category": "投資",
    "payer": "麻由美",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 473,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "15000",
    "title": "NISA(慶吾)",
    "category": "投資",
    "payer": "慶吾",
    "date": "2026-06-01",
    "type": "expense"
  },
  {
    "id": 474,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "241000",
    "title": "給料(あゆみ)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "income"
  },
  {
    "id": 475,
    "created_at": "2026-08-12 03:42:52.549617+00",
    "amount": "358050",
    "title": "給料(慶吾)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-06-01",
    "type": "income"
  },
  {
    "id": 540,
    "created_at": "2026-08-12 16:06:32.652195+00",
    "amount": "400000",
    "title": "app_settings",
    "category": "沖縄旅行",
    "payer": "40",
    "date": "settings",
    "type": "setting"
  },
  {
    "id": 542,
    "created_at": "2026-08-14 14:23:12.126732+00",
    "amount": "10000",
    "title": "アイロン",
    "category": "都度出費",
    "payer": "使用可",
    "date": "2026-08-01",
    "type": "extra_expense"
  },
  {
    "id": 549,
    "created_at": "2026-08-14 14:35:22.710045+00",
    "amount": "14200",
    "title": "7月分繰越金",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-08-01",
    "type": "carryover"
  },
  {
    "id": 550,
    "created_at": "2026-08-14 14:36:42.830306+00",
    "amount": "30400",
    "title": "6月分繰越金",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-07-01",
    "type": "carryover"
  },
  {
    "id": 551,
    "created_at": "2026-08-14 14:40:06.545599+00",
    "amount": "27330",
    "title": "不用品売る",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-07-01",
    "type": "carryover"
  },
  {
    "id": 552,
    "created_at": "2026-08-14 14:55:56.057663+00",
    "amount": "13000",
    "title": "スニーカー",
    "category": "都度出費",
    "payer": "使用可",
    "date": "2026-08-01",
    "type": "extra_expense"
  },
  {
    "id": 553,
    "created_at": "2026-08-14 15:07:32.863563+00",
    "amount": "91100",
    "title": "今までの累計繰越金",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-06-01",
    "type": "carryover"
  },
  {
    "id": 554,
    "created_at": "2026-08-14 15:13:35.74346+00",
    "amount": "6000",
    "title": "薬代",
    "category": "都度出費",
    "payer": "使用可",
    "date": "2026-06-01",
    "type": "extra_expense"
  },
  {
    "id": 555,
    "created_at": "2026-08-14 15:13:58.0571+00",
    "amount": "30000",
    "title": "フォト申し込み代",
    "category": "都度出費",
    "payer": "使用可",
    "date": "2026-06-01",
    "type": "extra_expense"
  },
  {
    "id": 557,
    "created_at": "2026-08-18 12:16:25.893213+00",
    "amount": "393000",
    "title": "フォトウェディング",
    "category": "都度出費",
    "payer": "使用可",
    "date": "2026-08-01",
    "type": "extra_expense"
  },
  {
    "id": 558,
    "created_at": "2026-08-18 12:16:55.151161+00",
    "amount": "132000",
    "title": "フォトウェディング",
    "category": "都度出費",
    "payer": "使用不可",
    "date": "2026-08-01",
    "type": "extra_expense"
  },
  {
    "id": 559,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "55050",
    "title": "家賃",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 560,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "60000",
    "title": "食費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 561,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "20000",
    "title": "光熱費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 562,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "15000",
    "title": "日用品",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 563,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "5720",
    "title": "WIFI",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 564,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "10000",
    "title": "贅沢費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 565,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "3000",
    "title": "お薬代",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 566,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "35000",
    "title": "あゆ親",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 567,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "10000",
    "title": "通院交通費",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 568,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "35000",
    "title": "お小遣い(あゆみ)",
    "category": "共用費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 569,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "35000",
    "title": "お小遣い(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 570,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "8230",
    "title": "定期代(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 571,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "11960",
    "title": "定期代(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 572,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "4000",
    "title": "保険料",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 573,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "9300",
    "title": "通信費(あゆみ)",
    "category": "必要経費",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 574,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "3800",
    "title": "通信費(慶吾)",
    "category": "必要経費",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 575,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "890",
    "title": "Netflix",
    "category": "サブスク",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 576,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "600",
    "title": "アマプラ",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 577,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "1100",
    "title": "NHK",
    "category": "サブスク",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 578,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "10000",
    "title": "NISA(あゆみ)",
    "category": "投資",
    "payer": "麻由美",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 579,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "15000",
    "title": "NISA(慶吾)",
    "category": "投資",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "expense"
  },
  {
    "id": 580,
    "created_at": "2026-08-25 12:56:31.777885+00",
    "amount": "209000",
    "title": "給料(あゆみ)",
    "category": "共用費",
    "payer": "共通",
    "date": "2026-09-01",
    "type": "income"
  },
  {
    "id": 582,
    "created_at": "2026-08-25 13:00:45.957249+00",
    "amount": "13000",
    "title": "食費のあまり",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-09-01",
    "type": "carryover"
  },
  {
    "id": 583,
    "created_at": "2026-08-25 13:01:11.66333+00",
    "amount": "4300",
    "title": "光熱費のあまり",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-09-01",
    "type": "carryover"
  },
  {
    "id": 584,
    "created_at": "2026-08-25 13:01:32.201464+00",
    "amount": "5200",
    "title": "日用品のあまり",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-09-01",
    "type": "carryover"
  },
  {
    "id": 585,
    "created_at": "2026-08-25 13:01:55.854547+00",
    "amount": "4000",
    "title": "実家交通費のあまり",
    "category": "繰越金",
    "payer": "使用可",
    "date": "2026-09-01",
    "type": "carryover"
  },
  {
    "id": 586,
    "created_at": "2026-08-25 13:04:57.046327+00",
    "amount": "346050",
    "title": "給料(慶吾)",
    "category": "共用費",
    "payer": "慶吾",
    "date": "2026-09-01",
    "type": "income"
  }
];
