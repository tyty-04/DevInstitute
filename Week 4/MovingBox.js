let div = document.getElementById("container");
let box = document.getElementById("box");
div.style.backgroundColor = "blue";
box.style.backgroundColor = "red";
box.style.width = "50px";
box.style.height = "50px";
div.style.width = "500px";
div.style.height = "500px";
box.style.position = "absolute";
div.style.position = "absolute";
div.style.top = "0px";
div.style.left = "0px";
let topNum = 0;
let leftNum = 0;
box.style.top = "0px";
box.style.left = "0px";
let upInterval = [];
let downInterval = [];
let leftInterval = [];
let rightInterval = [];

let buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].style.width = "50px";
}

let up = document.getElementById("up");
let down = document.getElementById("down");
let left = document.getElementById("left");
let right = document.getElementById("right");
let random = document.getElementById("random");
let stopB = document.getElementById("stop");
up.style.position = "absolute";
down.style.position = "absolute";
left.style.position = "absolute";
right.style.position = "absolute";
random.style.position = "absolute";
stopB.style.position = "absolute";
up.style.top = "500px";
up.style.left = "0px";
down.style.top = "500px";
down.style.left = "50px";
left.style.top = "500px";
left.style.left = "100px";
right.style.top = "500px";
right.style.left = "150px";
random.style.top = "500px";
random.style.left = "200px";
stopB.style.top = "500px";
stopB.style.left = "250px";

up.addEventListener("click", moveUp);
down.addEventListener("click", moveDown);
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);
random.addEventListener("click", randomMove);
stopB.addEventListener("click", stopMove);
document.addEventListener("keypress", function (event) {
  let key = event.key;
  switch (key) {
    case "w":
      moveUp();
      break;
    case "a":
      moveLeft();
      break;
    case "s":
      moveDown();
      break;
    case "d":
      moveRight();
      break;
    case "W":
      moveUp();
      moveUp();
      moveUp();
      break;
    case "A":
      moveLeft();
      moveLeft();
      moveLeft();
      break;
    case "S":
      moveDown();
      moveDown();
      moveDown();
      break;
    case "D":
      moveRight();
      moveRight();
      moveRight();
      break;
    case "r":
      randomMove();
      break;
    case " ":
      stopMove();
      break;

    default:
      break;
  }
});

function moveUp() {
  for (let i = 0; i < downInterval.length; i++) {
    clearInterval(downInterval[i]);
  }
  if (box.style.top == "0px") {
    return 0;
  } else {
    upInterval.push(setInterval(goUp, 5));
    return 0;
  }
}
function goUp() {
  if (box.style.top == "0px") {
    for (let i = 0; i < upInterval.length; i++) {
      clearInterval(upInterval[i]);
    }
  } else {
    topNum -= 1;
    box.style.top = topNum + "px";
    return 0;
  }
}

function moveDown() {
  for (let i = 0; i < upInterval.length; i++) {
    clearInterval(upInterval[i]);
  }
  if (box.style.top == "450px") {
    return 0;
  } else {
    downInterval.push(setInterval(goDown, 5));
    return 0;
  }
}
function goDown() {
  if (box.style.top == "450px") {
    for (let i = 0; i < downInterval.length; i++) {
      clearInterval(downInterval[i]);
    }
  } else {
    console.log(box.style.top);
    topNum += 1;
    box.style.top = topNum + "px";
    return 0;
  }
}

function moveLeft() {
  for (let i = 0; i < rightInterval.length; i++) {
    clearInterval(rightInterval[i]);
  }
  if (box.style.left == "0px") {
    return 0;
  } else {
    leftInterval.push(setInterval(goLeft, 5));
    return 0;
  }
}
function goLeft() {
  if (box.style.left == "0px") {
    for (let i = 0; i < leftInterval.length; i++) {
      clearInterval(leftInterval[i]);
    }
  } else {
    leftNum -= 1;
    box.style.left = leftNum + "px";
    return 0;
  }
}

function moveRight() {
  for (let i = 0; i < leftInterval.length; i++) {
    clearInterval(leftInterval[i]);
  }
  if (box.style.left == "450px") {
    return 0;
  } else {
    rightInterval.push(setInterval(goRight, 5));
    return 0;
  }
}
function goRight() {
  if (box.style.left == "450px") {
    for (let i = 0; i < rightInterval.length; i++) {
      clearInterval(rightInterval[i]);
    }
  } else {
    leftNum += 1;
    box.style.left = leftNum + "px";
    return 0;
  }
}

function randomMove() {
  let num = Math.floor(Math.random() * 4);
  if (box.style.top == "0px") {
    if (box.style.left == "0px") {
      while (num == 0 || num == 2) {
        num = Math.floor(Math.random() * 4);
      }
    } else if (box.style.left == "450px") {
      while (num == 0 || num == 3) {
        num = Math.floor(Math.random() * 4);
      }
    } else {
      while (num == 0) {
        num = Math.floor(Math.random() * 4);
      }
    }
  } else if (box.style.top == "450px") {
    if (box.style.left == "0px") {
      while (num == 1 || num == 2) {
        num = Math.floor(Math.random() * 4);
      }
    } else if (box.style.left == "450px") {
      while (num == 1 || num == 3) {
        num = Math.floor(Math.random() * 4);
      }
    } else {
      while (num == 1) {
        num = Math.floor(Math.random() * 4);
      }
    }
  } else if (box.style.left == "0px") {
    while (num == 2) {
      num = Math.floor(Math.random() * 4);
    }
  } else if (box.style.left == "450px") {
    while (num == 3) {
      num = Math.floor(Math.random() * 4);
    }
  }
  switch (num) {
    case 0:
      moveUp();
      break;
    case 1:
      moveDown();
      break;
    case 2:
      moveLeft();
      break;
    case 3:
      moveRight();
      break;
  }
}

function stopMove() {
  for (let i = 0; i < upInterval.length; i++) {
    clearInterval(upInterval[i]);
  }
  for (let i = 0; i < downInterval.length; i++) {
    clearInterval(downInterval[i]);
  }
  for (let i = 0; i < leftInterval.length; i++) {
    clearInterval(leftInterval[i]);
  }
  for (let i = 0; i < rightInterval.length; i++) {
    clearInterval(rightInterval[i]);
  }
  return 0;
}
