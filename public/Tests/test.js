"use strict";

var Nightmare = require("nightmare");
var should = require("chai").should();

var nightmare = Nightmare({
  show: true
});

// Let test if it login page works
nightmare
// Visit login page
  .goto("https://exodus1776.herokuapp.com/login")
  // Enter username.
  .type("#exampleInputEmail1", "team@exodus.com")
  // Enter password.
  .type("#exampleInputPassword1", "dummy*password")
  // Take a screenshot of the login form.
  .screenshot("login.png")
  // Click login button. Always check if you've done this where necessary!
  // It's easy to forget.
  .click(".btn-primary")
  // Wait until the  link to the course catalog renders.
  .wait("a[href='/index.html']")
//   // Click course catalog link.
//   .click("a[href='/index.html']")
//   // Scroll down a few hundred pixels.
//   .scrollTo(500, 0)
  // Take a screenshot and save it to the current directory.
  .screenshot("dashbooard.png")
  // End test
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })
  // Catch errors
  .catch(function (err) {
     console.log(err)
   })
