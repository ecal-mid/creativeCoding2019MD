var words = [];
//
function setup() {
  createCanvas(windowWidth, windowHeight);
}
//
function draw() {
  background(200);
  color(255, 0, 0);
  words.forEach(function(w) {
    w.draw();
  });
}

function receive(sentence) {
  //console.log(sentence);
  words.push(new Word(sentence));
}
//
class Word {
  constructor(_sentence) {
    this.speed = 0;
    this.sentence = _sentence;
      console.log(this.sentence);
    this.x = random(0, width);
    this.y = random(0, height);
  }
  draw() {
    this.y+=this.speed;
    this.speed +=0.01;
    text(this.sentence, this.x, this.y);
  }
}
