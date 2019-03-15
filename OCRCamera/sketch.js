var capture;
var imgToSend;
var canvas;
//
var previousJson;
var filename = "previous.json";
//
function preload() {
  previousJson = loadJSON(filename);
}
var receivedJSON = function(json, save) {
  if (json != undefined) {
    //
    if(save) {
      saveJSON(json, filename)
    }
    //
    console.log(json.Lines);
    json.Lines.forEach(function(line) {
      line.Words.forEach(function(word) {
        text(word.WordText, random(width), random(height));
      });
    });
  } else {
    console.log("no text found");
  }
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.drop(getImage);
  capture = createCapture(VIDEO);
  //imgToSend = createGraphics(320, 240);
  imgToSend = createGraphics(640, 480);
}

function mousePressed() {
  var data = imgToSend.elt.toDataURL('image/png');
  //console.log(data);
  getImage(data);
  //receivedJSON(previousJson, false);
}

function draw() {
  imgToSend.image(capture, 0, 0, imgToSend.width, imgToSend.height);
  line(0, 0, width, height);
  image(imgToSend, 0, 0, imgToSend.width, imgToSend.height);
  //
}
