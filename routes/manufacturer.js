const express =  require('express')
const router = express.Router()
const ManufacturerController =  require('../controllers/manufacturer')

router.post("/add",ManufacturerController.addManufacturer)
router.put("/update/:Id",ManufacturerController.updateManufacturer)

module.exports =router; 