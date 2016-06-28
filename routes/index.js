var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Georgia Southern Theta Xi',
    var2: 'Jake Walch',
    copy: '&copy; 2016 Theta Xi GSU'
  });
});

module.exports = router;
