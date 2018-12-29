"use strict";



// Splash Screen

var body = document.getElementsByTagName('body');
var navBar = document.getElementById("nav-bar");
var navButtons = document.getElementsByClassName("nav-button");
var logo = document.getElementById("logo");
var navBarSub = document.getElementsByClassName("nav-bar-sub");
var navBarSubButtons = document.getElementsByClassName("nav-bar-sub-button");
var homePortrait = document.getElementsByClassName("home-portrait");
var homePattern = document.getElementById("home-pattern");
var homeDescription = document.getElementsByClassName("home-description");



// Set height of body
//body[0].style.height = window.innerHeight - 240 + "px"; //240px = navBar Height + Footer Height
//homePortrait[0].style.height = window.innerHeight + "px";// - 240 + "px";
//homeDescription[0].style.height = window.innerHeight / 2 + "px";// - 240 + "px";

//
// Pattern
//


function printPattern(ele, pattern) {
  var counter = 0;
  var patternHolder = document.createElement("span");
  ele.appendChild(patternHolder);

  while(patternHolder.offsetWidth < (homePattern.offsetWidth)) {
    patternHolder.appendChild(document.createTextNode(pattern));
    counter += 1;
    if(counter > (homePattern.offsetWidth - 20)) {
      break;
    }
  }
  ele.appendChild(document.createElement("br"));
}

function drawPattern(ele, pattern1, pattern2) {
  var counter= 0;
  while(ele.offsetHeight < (window.innerHeight - 8)) {//font size is 8
    if(counter % 2) {
      printPattern(ele, pattern2);
    } else {
      printPattern(ele, pattern1);
    }
    counter += 1;
    if(counter > window.innerHeight) {
      break;
    }
  }
}

//Uncomment drawPattern() to draw the pattern
//drawPattern(homePattern, "_|__|_||", "|_||_|__");





/*
function fadeOut(element) {
  //Wait for a CSS animation to complete, then remove an element from the document

  window.setTimeout(function() {
    document.body.removeChild(element);
  }, 8900);


}

function fixNavFooter() {
  // Wait for a CSS animation to complete, then permanently set it's height
  // and prevent further animations. This function is soley for use with the
  // navigation footer.

  window.setTimeout(function() {
    //navFooter.style.height = 10 + "%";

    for(var i = 0; i < navButtons.length; i++) {
      navButtons[i].style.opacity = 1;
    }

    logo.style.opacity = 1;

  }, 4000);

}

navButtons[0].onclick = function() {
  navBarSub[0].style.display="block";
}

for(var i = 0; i < navBarSubButtons.length; i++) {
  navBarSubButtons[i].onmouseover = function () {
    navBarSub[0].style.display="block";
  }
}

navBarSub[0].onmouseover = function() {
  navBarSub[0].style.display="block";
}

navBarSub[0].onmouseout = function() {
  navBarSub[0].style.display="none";
}


*/


/*
navButtons[0].onmouseover = function() {

  if(detailOpen == true) {
    return;
  } else {
    var detail = document.createElement("div");
    detail.className = "portfolio-bar";
    //var detailText = document.createTextNode("This is a test!");
    //detail.appendChild(detailText);
    var portfolioButtons = [
      document.createElement("div"),
      document.createElement("div")
    ];

    for(var i = 0; i < portfolioButtons.length; i++) {
      portfolioButtons[i].className = "portfolio-button-container";
      detail.appendChild(portfolioButtons[i]);
    }

    navFooter.appendChild(detail);

    return detailOpen = true;
  }
}

navButtons[0].onmouseout = function() {
  var detail = document.getElementsByClassName("portfolio-bar")[0];

  if(detailOpen == true) {
    detail.onmouseout = function() {
      navFooter.removeChild(detail);
      detailOpen = false;
    }
    return;
  } else {
    navFooter.removeChild(detail);
    detailOpen = false;
  }
}





*/




//fadeOut(splashContainer);
//fixNavFooter();
