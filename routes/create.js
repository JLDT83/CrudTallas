const router = require('express').Router();
const connection = require('../conexion/conexion');
var db = require ("../conexion/conexion");

module.exports = app => {
    const connection = db();
}

router.get('/', function(req, res, next) {

    res.render('create', { title: 'Ingresar Alturas' });
    res.end;
  });
 
router.post('/', function(req, res, next) {
    res.render('create', { title: 'Ingresar nuevas medidas' });
    console.log (req.body);
    const { Country,MaleHeight,FemaleHeight,MaleHeightInch,FemaleHeightInch} = req.body;
    connection.query('INSERT INTO talla SET?', {
        Country,MaleHeight,FemaleHeight,MaleHeightInch,FemaleHeightInch   
     },
        (err, result) => {

            if (err) {
                console.log(err);
            }else{ 
       
            res.render('create');
            
        }
        });
        
});

module.exports = router;