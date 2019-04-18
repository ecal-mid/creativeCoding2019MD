var words;
var current = 0;
var last = -1;
var speed = 1000;
//
//
function preload() {
  strings = loadStrings("leshautsparleurs.txt");
}
//
var rythme = function() {
  console.log("CLICK");
  //
  console.log(words[current]);
  words[current].classList.add("currentWord");
  if(last>=0) {
    words[last].classList.remove("currentWord");
  }
  //
  //
  //
  // METTRE DANS UN BOUCLE ACTIONS
  // OU LANCER UNE FONCTION SEPAREE DANS CHAQUE IF
  var currentWord = words[current].innerHTML;
  //
  if(currentWord == "de") {
    console.log("augment rythme");
    if(speed == 1000) {
      speed = 250;
    } else {
      speed = 1000;
    }
  }
  if(currentWord == "Roxy") {
    console.log("other word");
  }
  //
  //
  //
  //
  last = current;
  current++;
  if (current >= words.length) {
    current = 0;
  }
  //
  setTimeout(rythme, speed);
}
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  // Récupérer l'élément du DOM
  var input = document.querySelector("#input");
  document.addEventListener("keypress", function(e) {
    if (e.keyCode == 13) {
      // Récupérer le contenu text de l'élément #input
      var textInput = input.innerHTML;
      cutText(textInput);
      console.log("enter");
    }
  });
}
//
function cutText(textInput) {
  var output = document.querySelector("#output");
  var splittedWords = textInput.split(' ');
  console.log(splittedWords);
  output.innerHTML = "<span>" + splittedWords.join("</span> <span>") + "</span>";
  //
  words = document.querySelectorAll("#output span");
  //console.log(words);
  //setInterval(rythme, speed);
  rythme();
  //
}
//
//

//
function draw() {
  background(255, 0, 0);
}
