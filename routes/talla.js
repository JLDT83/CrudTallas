var express = require('express');
var router = express.Router();
var db = require ("../conexion/conexion");

router.get('/', function(req, res, next) {

  db.query("SELECT * FROM talla order by MaleHeight desc, FemaleHeight desc ", function(err, resultados){
  res.render('talla', { title: 'Tallas Mundiales', Tallas:resultados });
  }); 
  });
module.exports = router;