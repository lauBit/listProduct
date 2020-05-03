'use strict'
var Product = require('../models/product');

function getProductById(req,res){
    var idProduct = req.params.id;
    Product.findById(idProduct, (error, product) => {
        if (error) {
            res.status(500).send({ message: 'Error en la petición' });
        } else {
            if (!product) {
                res.status(404).send({ message: 'El producto no existe' });
            } else {
                res.status(200).send({ product });
            }

        }
    });
 };

 function getAllProducts(req, res) {
    Product.find((error, products) => {
      if (error) {
        res.status(500).send({message: "Error en el servidor"});
      } else {
        if (products.length === 0) {
          res.status(404).send({ message: "No se encontraron canciones" });
        } else {
          res.status(200).send({ products });
        }
      }
    });
  }

 function createProduct(req, res) {
     var product = new Product();
     var params = req.body;
     product.name = params.name;
     product.description = params.description;
     product.price = params.price;
     product.type = params.type;
     product.save((error, productSave) => {
         if (error) {
             res.status(500).send({message: 'Error al guardar el producto'});
         } else {
             if(!productSave){
                 res.status(404).send({ message: 'No se ha registrado el producto'});
             } else {
                 res.status(200).send({product: productSave});
             }
         }
     })
 };

function updateProduct(req,res){
    var idProduct = req.params.id;
    var newData = req.body;
    Product.findByIdAndUpdate(idProduct, newData, (error, productUpdate) => {
        if (error) {
            res.status(500).send({ message: 'Error al actualizar el product'});
        } else {
            if (!productUpdate) {
                res.status(404).send({ message: 'El producto no ha sido actualizado'});
            } else {
                res.status(200).send({ product: productUpdate });
            }
        }
    })
};

function deleteProduct(req, res){
    var idProduct = req.params.id;
    Product.findByIdAndRemove(idProduct, (error, productDelete) => {
        if (error) {
            res.status(500).send({ message: 'Error al eliminar el producto'});
        } else {
            if (!productDelete) {
                res.status(404).send({ message: 'El producto no ha sido eliminado'});
            } else {
                res.status(200).send({ product: productDelete});
            }
        }
    })
};

module.exports = {
    getProductById,
    getAllProducts,
    createProduct,
    updateProduct,
    deleteProduct
}