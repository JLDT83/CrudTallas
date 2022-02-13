const router = require('express').Router();
const connection = require('../conexion/conexion');
var db = require ("../conexion/conexion");

module.exports = app => {
    const connection = db();
}



router.get('/:id', function(req, res, next) {
     const id = req.params.id;
    db.query("Delete FROM talla where id = ?", [id], function(err, resultados){
       res.render('exito', { title: 'Medidas Eliminadas', Edicion:resultados[0] });
      });
    });
     module.exports = router;