const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');


const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key:
        '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'
    }
  })
);

module.exports.sendMail = async (req, res, next) => {
  try {
    await transporter.sendMail({
            to: 'nudaykiran2014@gmail.com',
            from: 'ravikiran565@gmail.com',
            subject: 'Hello',
            html: '<h1>Hello from node app!</h1>'
          });
         res.status(200).send("email sent successfully")
    }
     catch(err){
            if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
    } 
}

