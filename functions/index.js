const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

const app = express();
const server = require('http').createServer(app);

app.get('/login', (request,response) => {

  res.sendFile(path.join(__dirname + '/public/login.html'));

} )
exports.app = functions.https.onRequest(app);

const port = 1212;
app.set('port', port);

server.listen(port);

module.exports = app;
