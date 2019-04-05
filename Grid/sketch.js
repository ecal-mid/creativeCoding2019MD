var cases = [];
var gridX = 32;
var gridY = 18;
var canvasText;
//
function preload() {}

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasText = createGraphics(gridX, gridY);
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
  // case1 = {
  //   positionX: 50,
  //   positionY: 50,
  //   rotation: 0,
  //   drawCase: function() {
  //     fill(0, 255, 255);
  //     rect(this.positionX, this.positionY, 20, 20);
  //   },
  // }
}

function draw() {
  //
  canvasText.background(255);
  canvasText.text(round(random(1000, 9999)), canvasText.width/2, canvasText.height/2);
  //
  cases.forEach(function(c){
    c.drawCase();
  });
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
    var color = canvasText.get(this.pixelX, this.pixelY);
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
