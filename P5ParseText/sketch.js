var strings;
var words;
var i = 0;
var wordsCounter = [];

function preload() {
  strings = loadStrings("leshautsparleurs.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(strings);
  words = strings[0].split(" ");
  setInterval(function() {
    if (i < words.length) {
      checkIfExist(words[i]);
    } else {
      return false;
    }
    i++;
  }, 0);
}

function draw() {
  background(255);
  y = 10;
  fill(0);
  textSize(10);
  text(i+" sur "+words.length, 100, 10);
  wordsCounter.forEach(function(presentWord) {
    text(presentWord.word+" : "+presentWord.counter, 0, y);
    y +=10;
  });
}

function checkIfExist(wordToCheck) {
  var needToAdd = true;
  wordsCounter.forEach(function(presentWord) {
    //console.log(wordToCheck + " ? " + presentWord.word);
    if (wordToCheck == presentWord.word) {
      //console.log("counter++");
      presentWord.counter++;
      needToAdd = false;
    }
  });
  if (needToAdd) {
    //console.log("add new");
    wordsCounter.push({
      word: words[i],
      counter: 0,
    });
    wordsCounter.sort(quantityComparator);
  }
}

function quantityComparator(wordA, wordB) {
  if(wordA.counter<wordB.counter) {
    return 1;
  } else {
    return -1;
  }
}
