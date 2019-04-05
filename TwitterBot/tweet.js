var Twit = require('twit');
var config = require('./config.js');
var T = new Twit(config);

//tweetIt();
//setInterval(tweetIt, 60 * 60 * 1000);

function tweetIt(message) {
    var d = new Date();
    var n = d.getHours();
    var tweet = message;
    T.post('statuses/update', {
        status: tweet
    }, tweeted);
    function tweeted(err, data, response) {
        if (err) {
            console.log(err);
        } else {
            console.log('Success: ' + data.text);
        }
    };
}
// -------------------------------------------------- SERVER
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('public'));
app.get('/', function(req, res) {
  res.render(path.join(__dirname + '/index.html'));
});
// Chargement du fichier index.html affiché au client
var server = http.createServer(app);
// Chargement de socket.io
var io = require('socket.io').listen(server);
// Quand un client se connecte, on le note dans la console
//var globalSocket;
io.sockets.on('connection', function(socket) {
  console.log('Un client est connecté !');
//  globalSocket = socket;
  socket.emit('message', 'Vous êtes bien connecté !');
  // FROM HTML PAGE
  socket.on('twit', function(message) {
    tweetIt(message);
    //console.log(message);
  });
});
console.log("listen to localhost:8080");
server.listen(8080);
//
//
//
