var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

var recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;
recognition.maxAlternatives = 1;
recognition.lang = "fr-FR";
//
//
//
//
recognition.start();
console.log('Ready to hear you.');
// document.onclick = function() {
//   recognition.start();
//   console.log('Ready to receive a color command.');
// }
//
recognition.onresult = function(event) {
  var last = event.results.length - 1;
  console.log(event.results[last]);
  var sentence = event.results[last][0].transcript;
  //if (!event.results[last].isFinal) {
  console.log('Result received: ' + sentence + '.');
  console.log('Confidence: ' + event.results[last][0].confidence);
  //receive(sentence);
  var splitted = sentence.split(" ");
  receive(splitted[splitted.length - 1]);
  //}
  //diagnostic.textContent = 'Result received: ' + color + '.';
  //bg.style.backgroundColor = color;
}
recognition.onspeechend = function() {}
