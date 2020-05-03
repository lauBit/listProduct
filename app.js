'use strict'
var express =require("express");
var bodyParser = require("body-parser");

var app = express(); //inicializar, como un New ... Devuelve todo el api 
var product_routes = require('./Backend/routes/product');

app.use(bodyParser.urlencoded({extended:false})); //para clave valor
app.use(bodyParser.json()); //objeto json 

//configurar cabeceras http, son los headers que vamos a devolver cuando nos hagan una solicitud
app.use((req, res, next) => {

    //Permitir acceso a nuestra api desde todos los dominios
    res.header('Access-Control-Allow-Origin', '*');

    //Cabeceras neesarias para que el api a nivel ajax funcione
    res.header('Access-Control-Allow-Headers',
        'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');

    //Métodos más comunes
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

    //Finaliza middleware
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
})

app.use('/api', product_routes);
module.exports = app;