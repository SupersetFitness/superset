const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require('morgan')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const dbConnection = require('./models/db') // loads our connection to the mongo database
const passport = require('./passport')
const routes = require("./routes");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ===== Passport ====
app.use(passport.initialize())
app.use(passport.session()) // will call the deserializeUser
// Add routes, both API and view
app.use(routes);

// ===== Middleware ====
app.use(morgan('dev'))
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())
app.use(
  session({
    secret: process.env.APP_SECRET || 'this is the default passphrase',
    store: new MongoStore({
      mongooseConnection: dbConnection
    }),
    resave: false,
    saveUninitialized: false
  })
)
// socket.io
// io = socket(server);

// io.on('connection', (socket) => {
//     console.log(socket.id);
// });

// io.on('connection', (socket) => {
//     console.log(socket.id);

//     socket.on('SEND_MESSAGE', function(data){
//         io.emit('RECEIVE_MESSAGE', data);
//     })
// });

//socket.io



// ===== testing middleware =====
// app.use(function(req, res, next) {
// 	console.log('===== passport user =======')
// 	console.log(req.session)
// 	console.log(req.user)
// 	console.log('===== END =======')
// 	next()
// })
// testing
// app.get(
// 	'/auth/google/callback',
// 	(req, res, next) => {
// 		console.log(`req.user: ${req.user}`)
// 		console.log('======= /auth/google/callback was called! =====')
// 		next()
// 	},
// 	passport.authenticate('google', { failureRedirect: '/login' }),
// 	(req, res) => {
// 		res.redirect('/')
// 	}
// )

/* Express app ROUTING */

// ====== Error handler ====
app.use(function (err, req, res, next) {
  console.log('====== ERROR =======')
  console.error(err.stack)
  res.status(500)
})

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

io.sockets.on('connection', function(socket) {
  socket.on('create', function(room) {
    socket.join(room);
  });
});
