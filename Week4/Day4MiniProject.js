let clear = document.getElementById("clear");
let drawBoxes = document.querySelectorAll("#draw > *");
let colorBoxes = document.querySelectorAll("#colors > *");
let body = document.querySelector("body");
let color = null;
let mousedown = false;

clear.addEventListener("click", () => {
  for (drawBox of drawBoxes) {
    drawBox.style.backgroundColor = "white";
  }
});
for (colorBox of colorBoxes) {
  colorBox.addEventListener("click", function (event) {
    color = event.target.style.backgroundColor;
  });
}
body.addEventListener("mousedown", function () {
  mousedown = true;
});
body.addEventListener("mouseup", function () {
  mousedown = false;
});
for (drawBox of drawBoxes) {
  drawBox.addEventListener("mousedown", function (event) {
    if (color != null) event.target.style.backgroundColor = color;
  });
  drawBox.addEventListener("mouseover", function (event) {
    if (mousedown && color != null) event.target.style.backgroundColor = color;
  });
}
