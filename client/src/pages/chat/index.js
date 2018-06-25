import React from 'react';
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = io.connect();
socket.emit('create', 'room1');


  const chatFunc = props => {
    app.get('/chat', function(req, res) {
      res.sendFile(__dirname + '/index.html');
    });

    io.on('connection', function(socket) {
      console.log('a user connected');
      socket.on('disconnect', function(socket) {
        console.log('a user disconnected')
      });
    });

    socket.on('typing', function(data) {
      //socket.emit('typing',{message:"helo angular"});
      socket.broadcast.emit('typing', {
        message: data.message
      });
    });

    socket.on('typing-stop', function(data) {
      //socket.emit('typing',{message:"helo angular"});
      socket.broadcast.emit('typing-stop', {
        message: data.message
      });
    });

    io.on('connection', function(socket) {
      socket.on('chat message', function(msg) {
        io.emit('chat message', msg)

        console.log('message: ' + msg);
      });
    });


    http.listen(3000, function() {
      console.log('listening on *:3000');
    });
  }




    export default chatFunc;
