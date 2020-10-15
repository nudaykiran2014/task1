const express =  require('express')
const router = express.Router()
const productController =  require('../controllers/product')

router.post("/add",productController.addProduct)
router.put("/update/:Id",productController.updateProduct)
router.get("/get",productController.getProduct)


module.exports =router; 