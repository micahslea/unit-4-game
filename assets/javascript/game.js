var computerGuess = function () {
  computerGen = Math.floor(Math.random() * 120) + 19;
  return computerGen;
};

$("#random-number").text(computerGuess);
console.log(computerGen);

var counter = 0;
var wins = 0;
var losses = 0;

$("#wins").text("Wins: " + wins);
$("#losses").text("Losses: " + losses);

$("#score").text(counter);

var crystalNumbers = function () {
  numbers = Math.floor(Math.random() * 19) + 1;
  return numbers;
};

$("#crystal-one").attr("data-crystalValue", crystalNumbers);
console.log(numbers);

$("#crystal-two").attr("data-crystalValue", crystalNumbers);
console.log(numbers);

$("#crystal-three").attr("data-crystalValue", crystalNumbers);
console.log(numbers);

$("#crystal-four").attr("data-crystalValue", crystalNumbers);
console.log(numbers);

$("#crystal-one").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#score").text(counter);
  if (counter === computerGen) {
    wins++;
    computerGuess();
    numbers;
    counter = 0;
  } else if (counter > computerGen) {
    losses++;
    computerGuess();
    numbers;
    counter = 0;
    console.log(losses);
  }
  console.log(counter);
});

$("#crystal-two").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
});

$("#crystal-three").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
});

$("#crystal-four").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
});

if (counter === "#random-number") {
  $("#wins").text = wins++;
  computerGuess();
  crystalNumbers;
  $("#score") = 0;
} else if (counter >= computerGuess.computerGen) {
  alert("working");
}
