'use strict'
var mongoose = require("mongoose");
var Schema = mongoose.Schema; // genera la forma del modelo, declaración de tipo de dato de los atributos

var productSchema = Schema({
    name: String,
    description: String,
    price: Number,
    type: String
});

module.exports = mongoose.model('Product', productSchema);