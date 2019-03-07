window.onload = function() {
  document.querySelector("#content").innerHTML = "This text will be replaced";
}
var socket = io.connect('http://localhost:8080');
socket.on('message', function(message) {
  console.log(message);
  document.querySelector("#content").innerHTML = "";
});
socket.on('chat', function(message) {
  console.log(message.text);
  document.querySelector("#content").innerHTML += message.text + " ";
});
