var computerGuess = function () {
  computerGen = Math.floor(Math.random() * 101) + 19;
  return computerGen;
};

$("#random-number").text(computerGuess);
console.log("random number " + computerGen);

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
console.log("crystal 1 " + numbers);

$("#crystal-two").attr("data-crystalValue", crystalNumbers);
console.log("crystal 2 " + numbers);

$("#crystal-three").attr("data-crystalValue", crystalNumbers);
console.log("crystal 3 " + numbers);

$("#crystal-four").attr("data-crystalValue", crystalNumbers);
console.log("crystal 4 " + numbers);

$("#crystal-one").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  counter += crystalValue;
  $("#score").text(counter);
  if (counter === computerGen) {
    wins++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#wins").text("Wins: " + wins);
    $("#score").text(counter);
    console.log(numbers);
  } else if (counter > computerGen) {
    losses++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#score").text(counter);
    $("#losses").text("Losses: " + losses);
    console.log(losses);
    console.log(numbers);
  }
  console.log("Score " + counter);
});

$("#crystal-two").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
  $("#score").text(counter);
  if (counter === computerGen) {
    wins++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#wins").text("Wins: " + wins);
    $("#score").text(counter);
  } else if (counter > computerGen) {
    losses++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#score").text(counter);
    $("#losses").text("Losses: " + losses);
    console.log(losses);
  }
  console.log("Score " + counter);
});

$("#crystal-three").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
  $("#score").text(counter);
  if (counter === computerGen) {
    wins++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#wins").text("Wins: " + wins);
    $("#score").text(counter);
  } else if (counter > computerGen) {
    losses++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#score").text(counter);
    $("#losses").text("Losses: " + losses);
    console.log(losses);
  }
  console.log("Score " + counter);
});

$("#crystal-four").on("click", function () {
  var crystalValue = $(this).attr("data-crystalValue");
  crystalValue = parseInt(crystalValue);
  $("#score").text(counter);
  counter += crystalValue;
  $("#score").text(counter);
  if (counter === computerGen) {
    wins++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#wins").text("Wins: " + wins);
    $("#score").text(counter);
  } else if (counter > computerGen) {
    losses++;
    counter = 0;
    $("#random-number").text(computerGuess);
    $("#crystal-one").attr("data-crystalValue", crystalNumbers);
    $("#crystal-two").attr("data-crystalValue", crystalNumbers);
    $("#crystal-three").attr("data-crystalValue", crystalNumbers);
    $("#crystal-four").attr("data-crystalValue", crystalNumbers);
    $("#score").text(counter);
    $("#losses").text("Losses: " + losses);
    console.log("losses " + losses);
  }
  console.log("Score " + counter);
});
