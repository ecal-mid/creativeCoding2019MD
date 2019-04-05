var cases = [];
var gridX = 64;
var gridY = 36;
var canvasText;
//
var texts = ["texte1", "texte2"];
var currentText = "";
var positionX = -1000;
//
function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasText = createGraphics(gridX, gridY);
  console.log("pd: "+canvasText.width+" / "+canvasText.height);
  canvasText.background(255);
  canvasText.textAlign(CENTER, CENTER);
  canvasText.textSize(18);
  canvasText.text("hello", canvasText.width/2, canvasText.height/2);
  //
  rectMode(CENTER);
  //
  for (var y = 0; y < gridY; y++) {
    for (var x = 0; x < gridX; x++) {
      var caseTemp = new Case(x, y);
      cases.push(caseTemp);
    }
  }
}

function draw() {
  //
  positionX--;
  if(positionX<0) {
    positionX = canvasText.width;
    console.log(canvasText.width);
    currentText = texts[0];
  }
  canvasText.background(255);
  canvasText.text(currentText, positionX, canvasText.height/2);
  //canvasText.text("OOOOO", canvasText.width/2, canvasText.height/2);
  //
  canvasText.loadPixels();
  console.log(canvasText.pixels.length +" / "+ (gridX*gridY));
  cases.forEach(function(c){
    c.drawCase();
  });
  canvasText.updatePixels();
  image(canvasText, 0, 0);
}
//
class Case {
  constructor(_posX, _posY) {
    this.pixelX = _posX;
    this.pixelY = _posY;
    this.positionX = _posX*20;
    this.positionY = _posY*20;
    this.rotation = 0;
  }
  drawCase() {
    //
    //var color = canvasText.get(this.pixelX, this.pixelY);
    var color = canvasText.pixels[this.pixelY*canvasText.width + this.pixelX];
    var lum = brightness(color);
    //console.log(lum);
    if(lum<50) {
      this.rotation = PI/2;
    } else {
      this.rotation = 0;
    }
    //
    push();
    translate(this.positionX, this.positionY);
    rotate(this.rotation);
    fill(0, 255, 255);
    rect(0, 0, 20, 20);
    line(-10, -10, 10, 10);
    pop();
  }
}
