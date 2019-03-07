// -------------------------------------------------- BOT
const TelegramBot = require('node-telegram-bot-api');
// replace the value below with the Telegram token you receive from @BotFather
const token = ''; // ADD BOT TOKEN !
// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {
  polling: true,
});
// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  // send a message to the chat acknowledging receipt of their message
  io.volatile.emit('chat', msg);
  bot.sendMessage(chatId, "message received");
});
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
});
console.log("listen to localhost:8080");
server.listen(8080);
