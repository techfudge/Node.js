const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'buzzigabinance22@gmail.com',
    pass: 'xxxxxx'
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"TechFudge" <bobobusari11@gmail.com>', // sender address
  to: 'crackheaddc22@gmail.com', // list of receivers
  subject: 'JOB APPLICATION', // Subject line
  text: 'Hello World!', // plain text body
  html: '<b>Hello World!</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Message sent: %s', info.messageId);
});
