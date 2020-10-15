const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductsSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Color:{
        type:String,
        required:true
    },
    Weight:{
        type:String,
        required:true
    },
    Manufacturer:{
        type: Schema.Types.ObjectId,
        ref: 'Manufacturers',
        required:true
    }
})



module.exports = mongoose.model('Products',ProductsSchema)