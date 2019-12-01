const express = require('express');
const router = express.Router();
const dbName = require('../assets/constants').dbName;
const collName = require('../assets/constants').collName;
const sampleDeck = require('../assets/constants').sampleDeck;
const assert = require('assert');

// Connect to MongoDB (provide URI in .env)
// MongoDBに接続します。
const MongoClient = require('mongodb').MongoClient
const client = new MongoClient(process.env.DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true})


/**
 * [ROUTE]: Responsible for deleting all entries by dropping collections.
 * [REQUIRED]: Authorization.
 * 
 *「ROUTE」：コレクションを削除してすべてのエントリを削除します。
 *「REQUIRED」：認証。
 */
router.post('/deleteAllEntries', (req, res) => {
  const { authorization } = req.body;
  const authorized = (authorization == process.env.ADMIN_CODE)

  // Drop collection if authorized. (refer to constants.js)
  // 許可されている場合、コレクションをドロップします。 （constants.jsを参照）
  if(authorized) {
    client.connect((err, client) => {
      assert.equal(null, err)
      const collection = client.db(dbName).collection(collName);
      collection.drop()

      console.log(`[/deleteAllEntires] $(dbName) with collection $(collName) has been dropped. All data has been deleted.`)
    });
  }

  res.send({
    authorized
  });
  
});

router.post('/populateEntries', (req, res) => {
  const { authorization } = req.body;
  const authorized = (authorization == process.env.ADMIN_CODE)

  // Inserts sampleDeck specified in constants.js if authorized.
  // 許可されている場合、constants.jsで指定されたsampleDeckを挿入します。
  if (authorized) {
    client.connect((err, client) => {
      assert.equal(null, err) 
      const collection = client.db(dbName).collection(collName);
      collection.insertMany(sampleDeck, null, (error, result) => {
        assert.equal(null, error) 

        res.send({
          authorized,
          insertedIds: result.insertedIds
        })
      })
    })
  } else {
    res.send({
      authorized,
      insertedIds: []
    })
  }

})

module.exports = router;
