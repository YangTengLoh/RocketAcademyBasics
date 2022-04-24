// make a variable out of the input and button
var input = document.querySelector("#starter-ex");
var button = document.querySelector("#starter-button");

// call this function
var myButtonClicked = function () {
  // get the current value that's been typed into the input
  var typedValue = input.value;

  // create a new h2
  var newHtwo = document.createElement("h2");

  // set the text inside this new element
  newHtwo.innerText = typedValue;

  // make the h2 appear on screen
  document.body.appendChild(newHtwo);

  // empty out the HTML input
  input.value = "";
};

// say which function to call *when* the user clicks the button
button.addEventListener("click", myButtonClicked);

var main = function (input) {
  var myOutputValue = "hello world";
  return myOutputValue;
};
