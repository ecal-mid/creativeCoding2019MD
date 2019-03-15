// Contiendras toutes les lignes du fichier .txt
var inputStrings = [];
// Contiendra les instances OneWord
var allWords = [];
// Contiendra les mots splittés par la fonction .split(" ");
var splittedWords = [];
// Sert à retenir l'emplacement dans le tableau splittedWord
var currentWord = 0;

function preload() {
  inputStrings = loadStrings("leshautsparleurs.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  splittedWords = inputStrings[0].split(' ');
  //console.log(words);
  // Première instance test de OneWord, contient le premier élément du tableau splitté par " "
  var w = new OneWord(splittedWords[0]);
  //console.log(w);
}

function draw() {
  background(255);
  //console.log(frameCount+" // "+frameCount%30);
  // S'active toutes les demi secondes
  if(frameCount%1 == 0) {
    //console.log("VALIDATE");
    // Récupère le mot actuel dans le tableau splittedWords[]
    var word = splittedWords[currentWord];
    //console.log(word);
    var found = false;
    allWords.forEach(function(instanceOfOneWord) {
      if(word == instanceOfOneWord.content) {
        instanceOfOneWord.counter++;
        found = true;
        //
      }
    });
    if(found == false) {
      var w = new OneWord(word);
      allWords.push(w);
    } else {
      allWords.sort(orderingByCounter);
    }
    //
    currentWord ++;
  }
  //
  var y = 15;
  allWords.forEach(function(instanceOfOneWord){
    var x = instanceOfOneWord.counter*5;
    text(instanceOfOneWord.content+" : "+instanceOfOneWord.counter, x, y);
    y+=15;
  });
  //
  // y = 15;
  // for(var j=0; j<allWords.length; j++) {
  //   text(allWords[j].content+" : "+allWords[j].counter, 200, y);
  //   y+=15;
  // }
}


function orderingByCounter(wordA, wordB) {
  if(wordA.counter > wordB.counter) {
    return -1;
  } else if(wordA.counter < wordB.counter) {
    return 1;
  } else {
    return 0;
  }
}




class OneWord {
  constructor(content) {
    this.content = content;
    this.counter = 1;
  }
}
