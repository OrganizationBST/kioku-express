var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.send({ status: 'Dummy' });
});

router.get('/getCard', function(req,res)) {
  
}
module.exports = router;
