/*

  A standalone javascript application.  Inspired by a cup of Peet's Coffee.

  Invoked when visiting /portfolio/patterns

*/


"use strict";

//Get the pattern
var pattern = document.getElementById("pattern");
var patternHolder = document.getElementById("pattern-holder");


// Set height of body
//body[0].style.height = window.innerHeight - 240 + "px"; //240px = navBar Height + Footer Height
//homePortrait[0].style.height = window.innerHeight + "px";// - 240 + "px";
//homeDescription[0].style.height = window.innerHeight / 2 + "px";// - 240 + "px";

//
// Pattern
//


function printPattern(ele, printThisPattern) {
  var counter = 0;
  var patternSpan = document.createElement("span");
  ele.appendChild(patternSpan);

  while(patternSpan.offsetWidth < (pattern.offsetWidth)) {
    patternSpan.appendChild(document.createTextNode(printThisPattern));
    counter += 1;
    if(counter > (pattern.offsetWidth - 20)) {
      break;
    }
  }
  ele.appendChild(document.createElement("br"));
}

function drawPattern(ele, pattern1, pattern2) {
  //Make sure the div we are about to print in is empty
  ele.innerHTML = "";

  var counter= 0;
  while(ele.offsetHeight < (patternHolder.offsetHeight - 8)) {//font size is 8
    if(counter % 2) {
      printPattern(ele, pattern2);
    } else {
      printPattern(ele, pattern1);
    }
    counter += 1;
    if(counter > window.offsetHeight) {
      break;
    }
  }
}

//Uncomment drawPattern() to draw the pattern
drawPattern(pattern, "_|__|_||", "|_||_|__");
