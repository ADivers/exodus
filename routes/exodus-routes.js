// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the posts
  app.get("/users", function(req, res) {

    db.User.findAll().then(function(dbUser) {
      var hbsObject = {
        users: dbUser
      };
      console.log(hbsObject);
      // res.json(dbUser);
      res.render("users", hbsObject);
    });
  });

  app.get("/email/api/send", function(req, res){
    db.User.findAll({attribute: ['email_address']}).then(function(dbUser){
      
      var emailTo = [];

      for(var i = 0; i < dbUser.length; i++){
        emailTo.push(dbUser[i].email_address);
      }

      var nodemailer = require('nodemailer');
      var path = require('path');
      var fs = require('fs')
      
      var template = fs.readFileSync(path.join(__dirname, "../welcomeEmail.html"))
      
      var fromEmail = 'exoduscrmtest@gmail.com'; // add email of the gmail you are sending from
      var password =  'exodustest'  // add gmail password
      
      emailTo = [
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
      res.json(emailTo);
    });
  });

  // Get rotue for retrieving a single user
  app.get("/users/:id", function(req, res) {

    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // POST route for saving a new user
  app.post("/users", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // DELETE route for deleting users
  app.delete("/users/:id", function(req, res) {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  // PUT route for updating users
  app.put("/users", function(req, res) {
    db.User.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbUser) {
        res.json(dbUser);
      });
  });
};
