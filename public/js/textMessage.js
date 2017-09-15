var twilio = require('twilio');

$(document).ready(function() {
    $("#textSubmit").click(function() {
        textContentCapture();
        sendText();
    });   
});

function textContentCapture() {
    var x = document.getElementById("tmContent").value;
    console.log(x);
};

var 

function sendText(function() {
            // Twilio Credentials
            const accountSid = 'AC754877e3fb03a0cd449bff55e9fcfea9';
            const authToken = 'f33a199e73ca24323a8a898629b69adb';
            // require the Twilio module and create a REST client
            const client = require('twilio')(accountSid, authToken);
            client.messages
            .create({
                to: '+19149809150',  // User Number(s)
                from: '+12027987897', // Twilio Number
                body: x,
                // mediaUrl: 'https://climacons.herokuapp.com/clear.png',
            })
            .then((message) => console.log(message.sid));
});