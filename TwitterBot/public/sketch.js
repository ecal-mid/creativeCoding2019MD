var socket = io.connect('http://localhost:8080');
//
//
function setup() {
  background(255);
  createCanvas(windowWidth, windowHeight);
  socket.emit('twit', 'Twitest');
  console.log("emitted");
}
//
function draw() {

}
