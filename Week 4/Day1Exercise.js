// Exercise 1
let div = document.getElementById("container");
console.log(div);
let pete = document.body.children[1].children[1];
pete.textContent = "Richard";
let firstName = document.querySelectorAll(".list li");
firstName[0].textContent = "Tyler";
firstName[2].textContent = "Tyler";
document.body.children[2].removeChild(document.body.children[2].children[1]);
let studentList = document.querySelectorAll(".list");
studentList[0].classList.add("student_list", "attendance", "university");
studentList[1].classList.add("student_list");
console.log(document);

// Exercise 2
let divElement = document.querySelector("div");
divElement.style.backgroundColor = "lightBlue";
divElement.style.padding = "5px";
document.querySelector("ul").removeChild(document.querySelector("li"));
let pete = document.querySelector("li");
pete.style.border = "red solid 1px";
document.body.style.fontSize = "30px";
if (divElement.style.backgroundColor == "lightblue") {
  alert("Hello John and Pete");
}

// Exercise 3
let divElement = document.querySelector("div");
divElement.setAttribute("id", "socialNetworkNavigation");
let ulElement = document.querySelector("ul");
let liElement = document.createElement("li");
let text = document.createTextNode("Logout");
liElement.appendChild(text);
ulElement.appendChild(liElement);
console.log(ulElement.firstElementChild.textContent);
console.log(ulElement.lastElementChild.textContent);

// Exercise 4
let allBooks = [
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    image: "https://images-na.ssl-images-amazon.com/images/I/91KzZWpgmyL.jpg",
    alreadyRead: true,
  },
  {
    title: "Oathbringer",
    author: "Brandon Sanderson",
    image: "https://images-na.ssl-images-amazon.com/images/I/917IzlTMiHL.jpg",
    alreadyRead: false,
  },
];

let div = document.querySelector("div");
let table = document.createElement("table");
let row1 = document.createElement("tr");
let h1 = document.createElement("th");
let h2 = document.createElement("th");
let h3 = document.createElement("th");
let h1Text = document.createTextNode("Title");
let h2Text = document.createTextNode("Author");
let h3Text = document.createTextNode("Image");
h1.appendChild(h1Text);
h2.appendChild(h2Text);
h3.appendChild(h3Text);
row1.appendChild(h1);
row1.appendChild(h2);
row1.appendChild(h3);
table.appendChild(row1);
div.appendChild(table);
for (let i = 0; i < allBooks.length; i++) {
  let row = document.createElement("tr");
  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");
  let td1Text = document.createTextNode(allBooks[i].title);
  let td2Text = document.createTextNode(allBooks[i].author);
  let td3Image = document.createElement("img");
  td3Image.setAttribute("src", allBooks[i].image);
  td3Image.setAttribute("width", "100px");
  td3Image.setAttribute("height", "162px");
  td1.appendChild(td1Text);
  td2.appendChild(td2Text);
  td3.appendChild(td3Image);
  row.appendChild(td1);
  row.appendChild(td2);
  row.appendChild(td3);
  table.appendChild(row);
  if (allBooks[i].alreadyRead) {
    row.style.color = "red";
  }
}
