var words = [];
var volSmooth = 0;
//
var mic;
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}
//
function draw() {
  textAlign(CENTER, CENTER);
  background(200);
  color(255, 0, 0);
  words.forEach(function(w) {
    w.draw();
  });
}
//
function receive(sentence) {
  var vol = mic.getLevel();
  volSmooth += (vol-volSmooth)/10;
  console.log("vol: "+vol);
  words.push(new Word(sentence, vol));
}
//
class Word {
  constructor(_sentence, _vol) {
    this.sentence = _sentence;
    console.log(this.sentence);
    var words = _sentence.split(" ");
    var randomWord = floor(random(0, words.length));
    //console.log(randomWord);
    this.selectedWord = words[randomWord];
    console.log(randomWord+" / "+this.selectedWord);
    this.x = random(200, width-200);
    this.y = random(200, height-200);
    this.size = _vol*500+5;
    this.color = color(0);
  }
  draw() {
    fill(this.color);
    textSize(this.size);
    text(this.sentence, this.x, this.y);
  }
}
