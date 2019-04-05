window.onload = function() {
  document.querySelector("#content").innerHTML = "This text will be replaced";
}
var socket = io.connect('http://localhost:8080');


socket.on('message', function(message) {
  console.log(message);
  document.querySelector("#content").innerHTML = "";
});


socket.on('chat', function(message) {

  console.log(message);
  document.querySelector("#content").innerHTML += message.text + " ";
  //text(message.text, 500, 500);
  line(0, 0, random(0, width), random(0, height));
});

function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  //line(0, 0, width, height);
}
function draw() {

}
