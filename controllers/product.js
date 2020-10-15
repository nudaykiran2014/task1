const mongoose = require("mongoose")

const Product = require('../models/product');
const manufacturer = require("../models/manufacturer");


module.exports.addProduct = async (req, res, next) => {
    const name = req.body.name;
    const color = req.body.color;
    const weight = req.body.weight;
    const manufacturer = req.body.manufacturer;

    const product = new Product({
      Name: name,
      Color: color,
      Weight: weight,
      Manufacturer:manufacturer
    });
    try {
      await product.save();
      res.send("created")
     
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 
};

module.exports.getProduct = async (req, res, next) => {
   
    try {
     let products =  await Product.find()
     .select('-_id')
     .populate('Manufacturer');
      res.send(products)
     
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 
};

module.exports.updateProduct = async (req, res, next) => {

    const productId = req.params.Id;
    const name = req.body.name;
    const color = req.body.color;
    const weight = req.body.weight;
    const manufacturer = req.body.manufacturer;

    try {
        const product = await Product.findById(productId)

      if (!product) {
        const error = new Error('Could not find product.');
        error.statusCode = 404;
        throw error;
      }
      product.Name = name;
      product.Weight = weight;
      product.Color = color;
      product.Manufacturer = manufacturer;
        await product.save();
      res.status(200).json({ message: 'product updated!'});
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};
  
