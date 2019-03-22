var words = [];
//
function setup() {
  createCanvas(windowWidth, windowHeight);
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
function keyPressed() {
  if (key === " ") {
    receive("test");
  }
}
//
function receive(sentence) {
  words.push(new Word(sentence));
}
//
class Word {
  constructor(_sentence) {
    this.sentence = _sentence;
    console.log(this.sentence);
    var words = _sentence.split(" ");
    var randomWord = floor(random(0, words.length));
    //console.log(randomWord);
    this.selectedWord = words[randomWord];
    console.log(randomWord+" / "+this.selectedWord);
    this.x = random(200, width-200);
    this.y = random(200, height-200);
    this.size = 50;
    this.color = color(0);
    //
    if(this.sentence.includes("grand")) {
      this.size = 200;
    }
    if(this.sentence.includes("petit")) {
      this.size = 20;
    }
    if(this.sentence.includes("rouge")) {
      this.color = color(255, 0, 0);
    }
    if(this.sentence.includes("bleu")) {
      this.color = color(0, 0, 255);
    }
  }
  draw() {
    fill(this.color);
    textSize(this.size);
    text(this.sentence, this.x, this.y);
  }
}
