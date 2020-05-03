'use strict'
var express = require("express");
var ProductController = require("../controllers/product");

var api = express.Router();

api.get('/product/:id', ProductController.getProductById);
api.get('/products', ProductController.getAllProducts);
api.post('/product', ProductController.createProduct);
api.put('/product/:id', ProductController.updateProduct);
api.delete('/product/:id', ProductController.deleteProduct);

module.exports = api;