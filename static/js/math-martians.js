/*

  Math Martians, a math-learning game. IN SPACE!

  Invoked when visiting /games/math-martians

  For reference:
  https://eloquentjavascript.net/16_game.html

*/


"use strict";


function moveSpaceShip(e) {
  var gameCanvas = document.getElementById("games-canvas");
  var spaceShip = document.getElementsByClassName("space-ship")[0];


  //Adjust the space ship's coordinates to the mouse position
  spaceShip.style.left = e.clientX.toString() + "px";
  spaceShip.style.top = e.clientY.toString() + "px";


}

function moveWall() {
  var wall = document.getElementsByClassName("wall");
  var gameCanvas = document.getElementById("games-canvas");
  var problemHolder = document.getElementsByClassName("problem-container")[0];

  for(var i = 0; i in wall; i++) {
    var wallTop = wall[i].style.top;


    //If wallTop has no value set for top, then set it to 0px
    if(wallTop == "") {
      wall[i].style.top = "0px";
    }

    //If the wall is at the bottom of the screen, remove it
    if(parseInt(wallTop, 10) >= gameCanvas.offsetHeight) {
      gameCanvas.removeChild(wall[i]);
      break;
    }

    //If the wall touches the problem container, remove it
    if(parseInt(wallTop, 10) >= gameCanvas.offsetHeight - problemHolder.offsetHeight - wall[i].offsetHeight) {
      gameCanvas.removeChild(wall[i]);
      break;
    }

    //Convert wallTop from a string into an Integer and move it
    var newTop = parseInt(wallTop, 10) + 1;

    //Convert wallTop back into a string and move the wall
    wall[i].style.top = newTop.toString() + "px";
  }
}

function addSpaceShip() {
  var spaceShip = document.createElement("div");
  spaceShip.className = "space-ship";
  return spaceShip;
}

function createEle(typeOfEle, nameOfClass) {
  var ele = document.createElement(typeOfEle);
  ele.className = nameOfClass;
  return ele;
}

function disperseSolutions(s0, s1, s2) {

  s0.style.left = getRandomInt(0, 20).toString() + "%";
  s1.style.left = getRandomInt(30, 50).toString() + "%";
  s2.style.left = getRandomInt(60, 90).toString() + "%";

  return s0, s1, s2;
}

function createProblem(s0, s1, s2) {
  var p0 = getRandomInt(0, 100);
  var p1 = getRandomInt(1, 100);
  var operator = getRandomInt(0, 4);
  var problem;
  var solution;
  var incorrectSolution0;
  var incorrectSolution1;

  if(operator == 0) {
    problem = p0 + " + " + p1;
    solution = p0 + p1;
    incorrectSolution0 = p0 + p1 + getRandomInt(1, 100);
    incorrectSolution1 = p0 + p1 - getRandomInt(1, 100);
  }
  if(operator == 1) {
    problem = p0 + " - " + p1;
    solution = p0 - p1;
    incorrectSolution0 = p0 - p1 + getRandomInt(1, 100);
    incorrectSolution1 = p0 - p1 - getRandomInt(1, 100);
  }
  if(operator == 2) {
    problem = p0 + " * " + p1;
    solution = p0 * p1;
    incorrectSolution0 = p0 * p1 * getRandomInt(2, 100);
    incorrectSolution1 = p0 * p1 / getRandomInt(2, 100);
  }
  if(operator == 3) {
    problem = p0 + " / " + p1;
    solution = p0 / p1;
    incorrectSolution0 = p0 / p1 / getRandomInt(2, 100);
    incorrectSolution1 = p0 / p1 * getRandomInt(2, 100);
  }



  return problem, solution, incorrectSolution0, incorrectSolution1;
}

function createWall() {
  var gameCanvas = document.getElementById("games-canvas");
  var wall = document.createElement("div");
  wall.className = "wall";
  gameCanvas.appendChild(wall);

  var problemHolder = document.getElementsByClassName("problem-container")[0];
  var problem = createEle("div", "problem");

  var s0 = createEle("div", "solution");
  var s1 = createEle("div", "solution");
  var s2 = createEle("div", "solution");

  disperseSolutions(s0, s1, s2);

  wall.appendChild(s0);
  wall.appendChild(s1);
  wall.appendChild(s2);
  problemHolder.appendChild(problem);
}

//
// Run the game
//

function runGame() {
  //Expand the game play area
  expandCanvas();

  //Define the game area (gameCanvas) and the player (spaceShip) and the problem-holder (problemHolder)
  var gameCanvas = document.getElementById("games-canvas");
  var spaceShip = createEle("div", "space-ship");
  var problemHolder = createEle("div", "problem-container");

  //Add the problem holder
  gameCanvas.appendChild(problemHolder);

  //Hide the cursor (because the spaceship will take its place)
  gameCanvas.style.cursor = "none";

  //Add the player to the game play area
  gameCanvas.appendChild(spaceShip);

  //Move the space ship with the mouse
  gameCanvas.addEventListener("mousemove", moveSpaceShip);


  //Every 5 seconds, add a wall
  var addingWalls = setInterval(createWall, 5000);


  //Every 1 second, move all walls
  var movingWalls = setInterval(moveWall, 10);


  //Test click tracking
  gameCanvas.onclick = whereClicked;

}

//
// End the game
//

function endGame(intervals) {
  let gameCanvas = document.getElementById("games-canvas");

  //Remove event listeners
  gameCanvas.removeEventListener("mousemove", moveSpaceShip);

  //Stop intervals
  //for(var i = 0; i in intervals; i++) {
  //  intervals[i].clearInterval();
  //}



  //Show the mouse over the game gameCanvas
  gameCanvas.style.cursor = "default";

}
