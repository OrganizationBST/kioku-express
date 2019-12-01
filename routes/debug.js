var express = require('express');
var router = express.Router();

router.post('/deleteAllEntries', (req, res) => {
  const { authorization } = req.body;

  res.send({
    authorized: (authorization == process.env.ADMIN_CODE)
  });
  
});

router.post('/populateEntries', (req, res) => {
  const { authorization } = req.body;

  res.send({
    authorized: (authorization == process.env.ADMIN_CODE)
  })
})

module.exports = router;
