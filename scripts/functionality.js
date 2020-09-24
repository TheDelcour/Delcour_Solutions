//STICK ONPAGE NAV TO TOP
window.onscroll = function() {myFunction()};

var navBar = document.getElementById("nav2");
var navCon = document.getElementById("onpage-nav");
// Add the sticky class to the navbar when reachin navCons scroll position. Removes "sticky" leaving the scroll position
function myFunction() {
var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
console.log("scrollTop  " + scrollTop);
console.log(navBar);
  if (scrollTop >= navCon.offsetTop) {
    navBar.classList.add("stickTop")
  } else {
    navBar.classList.remove("stickTop");
  }
} 


function logo(){
      $(".logo").load("svg-defs.svg"); 
    }
