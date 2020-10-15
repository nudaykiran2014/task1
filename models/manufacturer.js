const mongoose = require('mongoose')

const ManufacturerSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Address:{
        type:String,
        required:true
    }
})



module.exports = mongoose.model('Manufacturers',ManufacturerSchema)