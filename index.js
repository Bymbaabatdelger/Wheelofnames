
let body = document.querySelector("body");

let wheel = document.createElement("div");
let click = document.createElement("div");


let deg = 0;

wheel.classList.add("wheel");
click.classList.add("click");
click.innerText = "start";

const colors = ["red", "green", "yellow", "blue"];
const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

let result = "";

for (let i = 0; i < items.length; i++) {
  let colorIndex = i;
  let deg = Math.floor(360 / items.length);
  if (i === items.length - 1) {
    colorIndex = colorIndex - colors.length * Math.floor(i / colors.length) + 1;
  } else if (colorIndex >= colors.length) {
    colorIndex = colorIndex - colors.length * Math.floor(i / colors.length);
  }
  result = result + ` ${colors[colorIndex]}`;
  // "" + `red` + `0deg 40deg`;
  // "red 0deg 40deg," + "green" + `40deg + 80deg`;
  if (i === items.length - 1) {
    result = result + ` ${deg * i}deg ${deg * (i + 1)}deg`;
  } else {
    result = result + ` ${deg * i}deg ${deg * (i + 1)}deg,`;
  }
}

wheel.style.background = `conic-gradient(${result})`;

body.appendChild(wheel);
wheel.appendChild(click);

// wheel.style.background =

function rotateCircle() {
  deg = deg + 1440 + Math.random() * 360;
  wheel.style.transform = `rotate(${deg}deg)`;
}

click.onclick = rotateCircle;
