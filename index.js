'use strict' 
var mongoose = require("mongoose");
var app = require('./app');
var express =require("express");
var port = 3977;
var socketio = require('socket.io');

const http = require('http');
const path = require('path');

// Se inicializa servidor y puertos
const server = http.createServer(app);
const io = socketio.listen(server);

/* mongoose.connect("mongodb://localhost:27017/google", (err,res) => {
    if (err) {
        console.log("No se pudo conectar");
    } else {
        console.log("Conexion a base de datos exitosa");
        app.listen(port, function(){
            console.log("Servidor escuchando en el puerto " + port);
        })
    }
}) */

mongoose.connect('mongodb+srv://lauraVCamelo:kirita13.@dbsupermarket-pk06e.mongodb.net/test?retryWrites=true&w=majority').then( db => {
    console.log("Conexion a base de datos exitosa")
}).catch(error => {
    console.log(error);
});

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'public')));

require('./sockets')(io);

server.listen(app.get('port'), () => {
    console.log(`server op port ${app.get('port')}`);
});