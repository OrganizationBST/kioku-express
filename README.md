# kioku-express

Express end point.

# Setting up and installing

First, run `npm install` on this directory.

After that, go ahead and create a `.env` file in kioku-express. 

Inside there, it expects a `DB_LINK` variable to be set.

### Sample .env
```
# .env
DB_LINK=mongodb+srv://...
```

You can acquire the URL from any Mongo server. In our case, we use mongodb+srv since we are hosting the MongoDB on Atlas (thanks to its free tier).

# Documentation

## Routes

### Administrative
To use the administrative routes, you will need another key, known as `ADMIN_CODE` inside of your .env.
```
# .env
DB_LINK=mongodb+srv://...
ADMIN_CODE=whateveryouwant
```

*Substitute `ADMIN_CODE` with your own password.*
ALL POST requests expects `{ authorization: ADMIN_CODE }` inside of body in `x-www-form-urlencoded`

- **POST** /admin/deleteAllEntries
  - Deletes all entries in MongoDB.
- **POST** /admin/populateEntries
  - Initializes entries in MongoDB with a few initial decks and values.
    - _(Optional)_ you can pass in your own decks via `{ ...decks: [] }`.
- **POST** /admin/displayAllEntries
  - Returns a response with all documents. This is an unsafe operation and should not be used in your code, and only used for debugging purposes.

### Standard

TODO

# 日本語

# kioku-express

エンドポイントを表現します。

＃セットアップとインストール

まず、このディレクトリで「npm install」を実行します。

その後、先に進み、kioku-expressで `.env`ファイルを作成します。

内部では、 `DB_LINK`変数が設定されることを期待しています。

### サンプル.env
```
＃.env
DB_LINK = mongodb + srv：// ...
```

任意のMongoサーバーからURLを取得できます。この場合、MongoDBをAtlasでホストしているため、mongodb + srvを使用します（無料ティアのおかげです）。

# ドキュメンテーション

## ルート

### 管理
管理ルートを使用するには、.env内で「ADMIN_CODE」と呼ばれる別のキーが必要です。
```
＃.env
DB_LINK = mongodb + srv：// ...
ADMIN_CODE = whateveryouwant
```

*「ADMIN_CODE」を自分のパスワードに置き換えます。*
すべてのPOSTリクエストでは、 `x-www-form-urlencoded`の本文内に ` {authorization：ADMIN_CODE}` が必要です

- **POST** / admin / deleteAllEntries
  - MongoDBのすべてのエントリを削除します。
- **POST** / admin / populateEntries
  - MongoDBのエントリをいくつかの初期デッキと値で初期化します。
    - _(オプション)_ S`{... decks：[]}`を介して独自のデッキを渡すことができます。
- **POST** / admin / displayAllEntries
  - すべてのドキュメントを含む応答を返します。 これは安全ではない操作であり、コードでは使用しないでください。デバッグ目的でのみ使用してください。

### 標準