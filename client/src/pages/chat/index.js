import React from 'react';
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var socket = io.connect();
socket.emit('create', 'room1');



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

const chatFunc => {
    render() {
      return (
        <head>

        </head>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            font: 13px Helvetica, Arial;
          }

          form {
            background: #000;
            padding: 3px;
            position: fixed;
            bottom: 0;
            width: 100%;
          }

          form input {
            border: 0;
            padding: 10px;
            width: 90%;
            margin-right: .5%;
          }

          form button {
            width: 9%;
            background: rgb(130, 224, 255);
            border: none;
            padding: 10px;
          }

          #messages {
            list-style-type: none;
            margin: 0;
            padding: 0;
          }

          #messages li {
            padding: 5px 10px;
          }

          #messages li:nth-child(odd) {
            background: #eee;
          }
        </style>
        </head>

        <title>chat</title>

        <body>
          <ul id="messages"></ul>
          <form action="">
            <input id="m" autocomplete="off" /><button>Send</button>
          </form>>


        );
      }
    };


    export default chatFunc;
