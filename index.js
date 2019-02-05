const express = require('express');
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4200;

app.use(express.static(path.join(__dirname, 'client/build')))
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var server = require('http').createServer(app);

const ioServer = require('socket.io');
const RTCMultiConnectionServer = require('rtcmulticonnection-server');

ioServer(server).on('connection', function(socket) {
    RTCMultiConnectionServer.addSocket(socket);
});



server.listen(PORT);