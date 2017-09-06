var twilio = require('twilio');

// Twilio Credentials
const accountSid = 'AC754877e3fb03a0cd449bff55e9fcfea9';
const authToken = 'f33a199e73ca24323a8a898629b69adb';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+19149809150',
    from: '+12027987897',
    body: "Tomorrow's forecast in Financial District, San Francisco is Clear",
    // mediaUrl: 'https://climacons.herokuapp.com/clear.png',
  })
  .then((message) => console.log(message.sid));
