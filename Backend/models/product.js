'use strict'
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var productSchema = Schema({
    name: String,
    description: String,
    price: Number,
    type: String
});

module.exports = mongoose.model('Product', productSchema);