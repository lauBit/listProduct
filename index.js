'use strict' 
var mongoose = require("mongoose");
var app = require('./app');
var port = 3977;

mongoose.connect("mongodb://localhost:27017/google", (err,res) => {
    if (err) {
        console.log("No se pudo conectar");
    } else {
        console.log("Conexion a base de datos exitosa");
        app.listen(port, function(){
            console.log("Servidor escuchando en el puerto " + port);
        })
    }
})