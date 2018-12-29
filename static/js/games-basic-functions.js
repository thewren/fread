/*

  Math Martians, a math-learning game. IN SPACE!

  Invoked when visiting /games/math-martians

  For reference:
  https://eloquentjavascript.net/16_game.html

*/


"use strict";







function expandCanvas() {
  var gameCanvasContainer = document.getElementById("games-canvas-container");
  var gameCanvas = document.getElementById("games-canvas");

  //Resize the game canvas and its container to full screen
  gameCanvasContainer.style.position = "absolute";
  gameCanvasContainer.style.top = "0";
  gameCanvasContainer.style.left = "0";
  gameCanvasContainer.style.width = "100%";
  gameCanvasContainer.style.height = "100vh";
  gameCanvasContainer.style.margin = "0px";

  gameCanvas.style.position = "absolute";
  gameCanvas.style.top = "0";
  gameCanvas.style.left = "0";
  gameCanvas.style.width = "100%";
  gameCanvas.style.height = "100vh";

  //Empty the game canvas
  gameCanvas.innerHTML = "";

  //Add X button
  var closeButton = document.createElement("div");
  closeButton.className = "games-button-end";
  closeButton.appendChild(document.createTextNode("X"));
  gameCanvas.appendChild(closeButton);
  closeButton.onclick = closeGame;
}





function closeGame() {
  var gameCanvasContainer = document.getElementById("games-canvas-container");
  var gameCanvas = document.getElementById("games-canvas");

  //Empty the game canvas
  gameCanvas.innerHTML = "";

  //Run the game's end game scripts
  endGame();

  //Resize the game canvas and its container to full screen
  gameCanvasContainer.style.position = "";
  gameCanvasContainer.style.top = "";
  gameCanvasContainer.style.left = "";
  gameCanvasContainer.style.width = "90%";
  gameCanvasContainer.style.height = "45vh";
  gameCanvasContainer.style.marginLeft = "10%";
  gameCanvasContainer.style.marginTop = "50px";
  gameCanvasContainer.style.marginBottom = "50px";

  gameCanvas.style.position = "";
  gameCanvas.style.top = "";
  gameCanvas.style.left = "";
  gameCanvas.style.width = "80%";
  gameCanvas.style.height = "45vh";

  //Add the Start Button again and make it start a new game
  var startButton = document.createElement("div");
  startButton.className = "games-button-start";
  startButton.appendChild(document.createTextNode("START"));
  gameCanvas.appendChild(startButton);
  startButton.onclick = runGame;
}


function whereClicked(e) {

  console.log("X: " + e.clientX + ", Y: " + e.clientY);

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}



//
// Run the game
//

//function runGame() {
//  expandCanvas();
//  let gameCanvas = document.getElementById("games-canvas-container");



//}

//
// End the game
//

//function endGame() {

//}
