var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PRVA STRANICA' });
});
router.get('/nova', function(req, res, next) {
  res.render('nova', { title: 'DRUGA STRANICA', moje:'pokusavam'});
});

module.exports = router;
