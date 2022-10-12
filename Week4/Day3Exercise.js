//Exercise 1
// setTimeout(hello1, 2000);
// function hello1() {
//   alert("Hello World");
// }

// setTimeout(hello2, 2000);
// function hello2() {
//   let div = document.getElementById("container");
//   let p = document.createElement("p");
//   let pText = document.createTextNode("Hello World");
//   p.appendChild(pText);
//   div.appendChild(p);
// }

// let numHello = 1;
// let helloInt = setInterval(hello3, 2000);
// function hello3() {
//   if (numHello == 5) {
//     clearInterval(helloInt);
//   }
//   let div = document.getElementById("container");
//   let p = document.createElement("p");
//   let pText = document.createTextNode("Hello World");
//   p.appendChild(pText);
//   div.appendChild(p);
//   numHello++;
// }

// let button = document.getElementById("clear");
// button.addEventListener("click", () => {
//   clearInterval(helloInt);
// });

//Exercise 3
let square1 = document.getElementById("box")
let square3 = document.getElementById("target")

square1.addEventListener("dragstart", dragStart)

function dragStart(event){
  event.dataTransfer.setData("text", event.target.id);
}

square3.addEventListener("dragover", dragOver)
square3.addEventListener("drop", drop)
square3.addEventListener("dragenter", dragEnter)
square3.addEventListener("dragleave", dragLeave)

function dragOver(event){
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let dataSquare = event.dataTransfer.getData("text");
  let box = document.getElementById(dataSquare)
  event.target.appendChild(box);
}

function dragEnter(event){
   event.target.classList.add('over');
}

function dragLeave(event){
  event.target.classList.remove('over');
}

