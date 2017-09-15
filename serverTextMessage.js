const http = require('http');
const express = require('express');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Response to a user text message');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});

// run node serverTextMessage.js in one terminal
// run ngrok http 1337 in another terminal
// take the https url and paste it in Messaging: -A message comes in: https://www.twilio.com/console/phone-numbers/PN7a12ecb521f39f30b6bf2c1f9300dad8 with a /sms