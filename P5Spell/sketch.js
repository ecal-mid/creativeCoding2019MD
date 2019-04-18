function preload() {}
//
function setup() {
  createCanvas(windowWidth, windowHeight);
  //
  var options = {
    method: 'GET',
    header: {
      "X-RapidAPI-Key": "ae1c19882bmshcad1891ccea5853p1e59cdjsnf02e34907755",
      //Content-Type: "application/x-www-form-urlencoded",
    },
  }
  var that = this;
  fetch("https://montanaflynn-spellcheck.p.rapidapi.com/check/?text=senntenece", options).then(function(response) {
    console.log(response);
    // if (response.ok) {
    //   response.json().then(json => {
    //     console.log(json);
    //     that.update();
    //   });
    // } else {
    //   console.log(response);
    // }
  });
}
//
function draw() {
  background(255, 0, 0);
}
