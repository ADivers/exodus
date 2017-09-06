var nodemailer = require('nodemailer');
// var template = require("/hero.html");
var path = require('path');
var fs = require('fs')

var template = fs.readFileSync(path.join(__dirname, "/welcomeEmail.html"))

var fromEmail = 'exoduscrmtest@gmail.com'; // add email of the gmail you are sending from
var password =  'exodustest'  // add gmail password

var emailTo = [
    'divers1776@gmail.com',
    'carljdor@gmail.com',
    'ajnwosu@gmail.com',
    'm11farrelly@gmail.com'
]

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: fromEmail,
    pass: password
  }
});

var mailOptions = {
  from: fromEmail,
  to: emailTo,
  subject: 'Test Email',
  html: template
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 

