$("body").css({
  background:
    "url(https://images.unsplash.com/photo-1455612693675-112974d4880b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80)",
  "background-repeat": "no-repeat",
  "background-size": "cover",
});

var title = $("<div>");

title.html("<h1>Crystals Collector!<h1>");
title.css({
  "background-color": "rgba(65, 121, 243, 0.705)",
  padding: "20px",
  width: "300px",
  "text-align": "center",
  color: "white",
  "margin-left": "20px",
});
$("#main").append(title);

var directions = $("<div>");

directions.html(
  "<h2>You will be given a random number at the start of the game.</h2><br/><h2>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your total score.</h2><br/><h2>You win the game by matching your total score to a random number. You lose if your total score goes above the random number.</h2><br/><h2>The value of each crystal is hidden from you until you click on it.</h2><br/><h2>Each time when the game starts, the game will change the value of each crystal.</h2>"
);
directions.css({
  "background-color": "rgba(240, 245, 170, 0.61)",
  padding: "20px",
  width: "600px",
  color: "rgb(104, 71, 10)",
  "margin-bottom": "10px",
  "text-align": "left",
  position: "absolute",
  top: "70px",
  left: "20px",
});
title.append(directions);

var randomNumber = $("<div>");

randomNumber.html();
randomNumber.css({
  "background-color": "rgba(44, 172, 44, 0.61)",
  padding: "20px",
  width: "250px",
  color: "darkblue",
  float: "left",
  height: "100px",
  "margin-right": "20px",
  "margin-bottom": "20px",
  "font-size": "40px",
  position: "absolute",
  top: "230px",
  left: "0px",
});

directions.append(randomNumber);

var winLoss = $("<div>");

winLoss.html();
winLoss.css({
  "background-color": "rgb(135, 206, 235, 0.61)",
  padding: "20px",
  width: "100px",
  color: "black",
  float: "left",
  height: "100px",
  "font-size": "18px",
  "text-align": "center",
  position: "relative",
  left: "290px",
  bottom: "20px",
});

randomNumber.append(winLoss);

var wins = 0;
var losses = 0;

winLoss.append("<br />" + "Wins: " + wins + "<br />" + "<br />");
winLoss.append("Losses: " + losses + "<br />");
