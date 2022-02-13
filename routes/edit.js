const router = require('express').Router();
const connection = require('../conexion/conexion');
module.exports = app => {
    const connection = db();
}

var db = require ("../conexion/conexion");
    router.get('/:id', function(req, res, next) {
    const id = req.params.id;
    db.query("SELECT * FROM talla where id = ?", [id], function(err, resultados){
        res.render('edit', { title: 'Editar Alturas', Edicion:resultados[0] });
    });
    });

    router.post('/', function(req, res, next) {
    res.render('exito', { title: 'Medidas Editadas' });
    const { id,Country,MaleHeight,FemaleHeight,MaleHeightInch,FemaleHeightInch} = req.body;
         connection.query('UPDATE talla SET ? where id= ?', [{
            Country,MaleHeight,FemaleHeight,MaleHeightInch,FemaleHeightInch   
         },id],
            (err, result) => {
                if (err) {
                    console.log(err);
                }else{ 
                res.render('exito');
            }
            });
       
    });
module.exports = router;