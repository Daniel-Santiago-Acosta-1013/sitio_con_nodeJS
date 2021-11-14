var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion")


/* GET Sección (productos.ejs). */
router.get('/', function(req, res, next) {

    db.query("SELECT * FROM tblproductos", function(err, resultados){
        console.log(resultados);
    });

    res.render('productos', { title: 'Nuestros productos' });
 
});

module.exports = router;
