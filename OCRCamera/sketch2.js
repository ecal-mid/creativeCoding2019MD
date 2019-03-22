var canvasToSend;
var captureVideo;
//
function preload() {}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  captureVideo = createCapture(VIDEO);
  canvasToSend = createGraphics(640, 480);
  // Drop File !
  canvas.drop(getImage);
}

function mousePressed() {
  // Send Camera !
  //var data = canvasToSend.elt.toDataURL('image/png');
  //getImage(data);
}

function draw() {
  canvasToSend.image(captureVideo, 0, 0, canvasToSend.width, canvasToSend.height);
  //image(canvasToSend, 0, 0);
}

function receivedJSON(json) {
  //console.log("Received this json: ");
  //console.log(json);
  console.log(json.Lines[4].Words[1].Left);
  //
  if (json.Lines.length > 0) {
    json.Lines.forEach(function(line) {
      line.Words.forEach(function(word) {
        //word.Left;
        console.log(word.Wordtext + "  " + word.Left + "  " + word.Top);
        text(word.WordText, word.Left, word.Top);
      });
    });
  } else {
    console.log("no text found");
  }
}
