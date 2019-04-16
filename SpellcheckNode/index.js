var dictionary = require('dictionary-en-us')
var nspell = require('nspell')
var spell;

dictionary(ondictionary)

function ondictionary(err, dict) {
  if (err) {
    throw err
  }
  spell = nspell(dict)
  console.log(spell.correct('colour')) // => false
  console.log(spell.suggest('colour')) // => ['color']
  console.log(spell.correct('color')) // => true
  console.log(spell.correct('npm')) // => false
  spell.add('npm')
  console.log(spell.correct('npm')) // => true
  console.log(spell.correct('color'));
}
//
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
  socket.emit('message', 'Vous êtes bien connecté !');
  socket.on("correct", function(message) {
    var returnObj = {
      word: message,
      correct: spell.correct(message),
    };
    console.log(returnObj);
    socket.emit("corrected", returnObj);
  });
});
console.log("listen to localhost:8080");
server.listen(8080);
