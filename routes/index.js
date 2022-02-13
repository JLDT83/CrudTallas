var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tallas Mundiales' });
});

router.get('/fuente', function(req, res, next) {
  res.render('fuente', { title: 'Fuente de datos' });
});

module.exports = router;
