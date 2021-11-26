// function flipCard(card) {
//   card.classList.add("flip-card");
// }

const inner1 = document.getElementById("inner1");
const inner2 = document.getElementById("inner2");
const inner3 = document.getElementById("inner3");
const inner4 = document.getElementById("inner4");
const inner5 = document.getElementById("inner5");
const inner6 = document.getElementById("inner6");

const overlay1 = document.getElementById("overlay1");
const overlay2 = document.getElementById("overlay2");
const overlay3 = document.getElementById("overlay3");
const overlay4 = document.getElementById("overlay4");
const overlay5 = document.getElementById("overlay5");
const overlay6 = document.getElementById("overlay6");

var numclick1 = 0;
var numclick2 = 0;
var numclick3 = 0;
var numclick4 = 0;
var numclick5 = 0;
var numclick6 = 0;

inner1.addEventListener("click", () => {
  if (numclick1 % 2 == 0) {
    document.getElementById("inner1").style.transform = "rotateY(180deg)";
    document.getElementById("inner1").style.transformOrigin = "rotate(180deg)";
    // document.getElementById("overlay1").style.visibility = "hidden";
    numclick1 = numclick1 + 1;
    console.log("first click");
    console.log(numclick1);
  } else {
    document.getElementById("inner1").style.transform = "rotateY(0deg)";
    document.getElementById("inner1").style.transformOrigin = "rotate(0deg)";
    // document.getElementById("overlay1").style.visibility = "visible";
    numclick1 = numclick1 + 1;
    console.log("second click");
  }
});

inner2.addEventListener("click", () => {
  if (numclick2 % 2 == 0) {
    document.getElementById("inner2").style.transform = "rotateY(180deg)";
    document.getElementById("inner2").style.transformOrigin = "rotate(180deg)";
    numclick2 = numclick2 + 1;
    console.log("first click");
    console.log(numclick2);
  } else {
    document.getElementById("inner2").style.transform = "rotateY(0deg)";
    document.getElementById("inner2").style.transformOrigin = "rotate(0deg)";
    numclick2 = numclick2 + 1;
    console.log("second click");
  }
});

inner3.addEventListener("click", () => {
  if (numclick3 % 2 == 0) {
    document.getElementById("inner3").style.transform = "rotateY(180deg)";
    document.getElementById("inner3").style.transformOrigin = "rotate(180deg)";
    numclick3 = numclick3 + 1;
    console.log("first click");
    console.log(numclick3);
  } else {
    document.getElementById("inner3").style.transform = "rotateY(0deg)";
    document.getElementById("inner3").style.transformOrigin = "rotate(0deg)";
    numclick3 = numclick3 + 1;
    console.log("second click");
  }
});

inner4.addEventListener("click", () => {
  if (numclick4 % 2 == 0) {
    document.getElementById("inner4").style.transform = "rotateY(180deg)";
    document.getElementById("inner4").style.transformOrigin = "rotate(180deg)";
    numclick4 = numclick4 + 1;
    console.log("first click");
    console.log(numclick4);
  } else {
    document.getElementById("inner4").style.transform = "rotateY(0deg)";
    document.getElementById("inner4").style.transformOrigin = "rotate(0deg)";
    numclick4 = numclick4 + 1;
    console.log("second click");
  }
});

inner5.addEventListener("click", () => {
  if (numclick5 % 2 == 0) {
    document.getElementById("inner5").style.transform = "rotateY(180deg)";
    document.getElementById("inner5").style.transformOrigin = "rotate(180deg)";
    numclick5 = numclick5 + 1;
    console.log("first click");
    console.log(numclick5);
  } else {
    document.getElementById("inner5").style.transform = "rotateY(0deg)";
    document.getElementById("inner5").style.transformOrigin = "rotate(0deg)";
    numclick5 = numclick5 + 1;
    console.log("second click");
  }
});

inner6.addEventListener("click", () => {
  if (numclick6 % 2 == 0) {
    document.getElementById("inner6").style.transform = "rotateY(180deg)";
    document.getElementById("inner6").style.transformOrigin = "rotate(180deg)";
    numclick6 = numclick6 + 1;
    console.log("first click");
    console.log(numclick6);
  } else {
    document.getElementById("inner6").style.transform = "rotateY(0deg)";
    document.getElementById("inner6").style.transformOrigin = "rotate(0deg)";
    numclick6 = numclick6 + 1;
    console.log("second click");
  }
});
