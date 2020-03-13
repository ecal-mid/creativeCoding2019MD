function preload() {
}
function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255, 0, 0);
  fill(0);
  ellipse(width/2, height/2, 20, 20);
  //
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
