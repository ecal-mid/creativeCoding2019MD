var socket;
function preload() {
  socket = io.connect('http://localhost:8080');
  socket.on('corrected', function(message) {
    console.log(message);
  });
}
function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  console.log("dddd");
  socket.emit("correct", "hello");
  socket.emit("correct", "eatings");
}
function draw() {
}
