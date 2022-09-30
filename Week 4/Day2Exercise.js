//Exercise 1
// let h1 = document.querySelector("h1");
// console.log(h1);
// let lastP = document.querySelectorAll("p")[3];
// lastP.remove();
// let h2 = document.querySelector("h2");
// h2.addEventListener("click", h2Click);
// function h2Click() {
//   h2.style.backgroundColor = "red";
// }
// let h3 = document.querySelector("h3");
// h3.addEventListener("click", h3Click);
// function h3Click() {
//   h3.style.display = "none";
// }
// let button = document.getElementById("bold");
// button.addEventListener("click", bold);
// function bold() {
//   let pList = document.querySelectorAll("p");
//   for (let i = 0; i < pList.length; i++) {
//     pList[i].style.fontWeight = "bold";
//   }
// }
// h1.addEventListener("mouseover", h1Mouse);
// function h1Mouse() {
//   let random = Math.floor(Math.random() * 100) + 1;
//   h1.style.fontSize = `${random}px`;
// }
// let p2 = document.querySelectorAll("p")[1];
// p2.addEventListener("mouseover", p2FadeOut);
// p2.addEventListener("mouseout", p2FadeIn);
// function p2FadeOut() {
//   p2.style.animation = "fadeOutAnimation ease 3s";
//   p2.style.animationIterationCount = 1;
//   p2.style.animationFillMode = "forwards";
// }
// function p2FadeIn() {
//   p2.style.animation = "fadeInAnimation ease 3s";
//   p2.style.animationIterationCount = 1;
//   p2.style.animationFillMode = "forwards";
// }

//Exercise 2
// let form = document.forms[0];
// console.log(form);
// let fNameID = document.getElementById("fname");
// let lNameID = document.getElementById("lname");
// console.log(fNameID);
// console.log(lNameID);
// let fName = form.elements.fname;
// let lName = form.elements.lname;
// console.log(fName);
// console.log(lName);
// form.addEventListener("submit", () => {
//   event.preventDefault();
//   let fNameValue = fName.value;
//   let lNameValue = lName.value;
//   if (fNameValue != "" && lNameValue != "") {
//     let fNameLI = document.createElement("li");
//     let lNameLI = document.createElement("li");
//     let fNameLIText = document.createTextNode(fNameValue);
//     console.log(fNameLIText);
//     fNameLI.appendChild(fNameLIText);
//     let lNameLIText = document.createTextNode(lNameValue);
//     console.log(lNameLIText);
//     lNameLI.appendChild(lNameLIText);
//     let ul = document.querySelector("ul");
//     ul.appendChild(fNameLI);
//     ul.appendChild(lNameLI);
//   }
// });

//Exercise 3
// let allBoldItems = [];
// function getBoldItems(){
//   allBoldItems = document.querySelectorAll("strong");
// }
// function highlight(){
//   getBoldItems();
//   for (let i = 0; i < allBoldItems.length; i++){
//     allBoldItems[i].style.color = "blue";
//   }
// }
// function returnNormal(){
//   getBoldItems();
//   for (let i = 0; i < allBoldItems.length; i++){
//     allBoldItems[i].style.color = "black"
//   }
// }
// let paragraph = document.querySelector("p");
// paragraph.addEventListener("mouseover", highlight);
// paragraph.addEventListener("mouseout", returnNormal);

//Exercise 4
// let form = document.forms[0];
// form.addEventListener("submit", () => {
//   event.preventDefault();
//   let radius = form.elements.radius.value;
//   let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//   form.elements.volume.value = volume;
// });
