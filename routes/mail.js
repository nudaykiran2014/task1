const express =  require('express')
const router = express.Router()
const mailcontroller =  require('../controllers/sendmail')

router.post("/sendmail",mailcontroller.sendMail)



module.exports =router; 




















