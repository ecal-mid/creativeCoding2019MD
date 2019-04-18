//
var usedLetters = ["a", "b"];
var letterImages = [];
// letterImages["a"] = {
//   images : [1, 2, 3]
// };


console.log(letterImages);
//
function preload() {
  //
  usedLetters.forEach(function(currentLetter) {
    console.log(currentLetter);
    var imagesForThisLetter = [];
    for(var i=1; i<=2; i++) {
      imagesForThisLetter.push(loadImage("imgs/"+currentLetter+"/"+i+".jpg"));
    }
    letterImages[currentLetter] = {
      images: imagesForThisLetter,
    };
  });
  console.log(letterImages);
  //

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //console.log(w);
}

function draw() {
  var mot = "ab";
  var myLetterToDraw = mot.charAt(0);
  image(letterImages[myLetterToDraw].images[1], 0, 0);
}
