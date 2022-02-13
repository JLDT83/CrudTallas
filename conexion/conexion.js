var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'crudjs',
});

connection.connect(
    (err)=>{
        if(!err){ console.log("conexion");}
        else { console.log("conexion fallida"); }
    }
);
module.exports= connection;