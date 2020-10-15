const mongoose = require("mongoose")

const Manufacturer = require('../models/manufacturer');


module.exports.addManufacturer = async (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;

    const manufacturer = new Manufacturer({
      Name: name,
      Email: email,
      Address: address,
    });
    try {
      await manufacturer.save();
      res.send("created")
     
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    } 
};



module.exports.updateManufacturer = async (req, res, next) => {

    const ManufacturerId = req.params.Id;
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    try {
      const manufacturer = await Manufacturer.findById(ManufacturerId);
      if (!manufacturer) {
        const error = new Error('Could not find Manufacturer.');
        error.statusCode = 404;
        throw error;
      }
      manufacturer.Name = name;
      manufacturer.Email = email;
      manufacturer.Address = address;
      await manufacturer.save();
      res.status(200).json({ message: 'Manufacturer updated!'});
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
};
  
