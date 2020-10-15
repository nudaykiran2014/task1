const express = require('express')
const app = express()
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: 'false'}));
app.use(bodyParser.json());

app.use("/mail",require('./routes/mail'))
app.use('/manufacturer',require('./routes/manufacturer'))
app.use('/product',require('./routes/product'))

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
  });
  
mongoose
  .connect(
    'mongodb://127.0.0.1:27017/ESTORE'
  )
  .then(result => {
    app.listen(8080,console.log("server started listening "));
  })
  .catch(err => console.log(err));
