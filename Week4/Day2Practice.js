// let table = document.getElementById("sampleTable");
// let numRow = 3;
// function insertRow() {
//   let newRow = document.createElement("tr");
//   let newCell1 = document.createElement("td");
//   let newCell2 = document.createElement("td");
//   let newCell1Text = document.createTextNode(`Row${numRow} cell1`);
//   let newCell2Text = document.createTextNode(`Row${numRow} cell2`);
//   newCell1.appendChild(newCell1Text);
//   newCell2.appendChild(newCell2Text);
//   newRow.appendChild(newCell1);
//   newRow.appendChild(newCell2);
//   table.appendChild(newRow);
//   numRow++;
// }

// let button = document.getElementById("jsstyle");
// button.style.backgroundColor = "gray";
// button.style.height = "50px";
// button.style.width = "50px";
// button.addEventListener("click", clickEvent, false);
// button.addEventListener("mouseover", mouseOverEvent);
// button.addEventListener("mouseout", mouseOutEvent);
// function clickEvent() {
//   alert("Button Clicked");
//   button.style.backgroundColor = "red";
//   setTimeout(reset, 2000);
//   e.stopPropagation();
// }
// function mouseOverEvent() {
//   button.style.height = "200px";
//   button.style.width = "200px";
// }
// function mouseOutEvent() {
//   button.style.height = "50px";
//   button.style.width = "50px";
// }
// function reset() {
//   button.style.backgroundColor = "gray";
// }

// let div = document.querySelector("div");
// div.addEventListener("click", divClick);
// function divClick() {
//   alert("div has been clicked");
// }

// function getvalue() {
//   let form = document.forms.form1;
//   let fName = form.elements.fname;
//   let lName = form.elements.lname;
//   alert("First Name: " + fName.value);
//   alert("Last Name: " + lName.value);
// }

function formPractice() {
  let dropdown = document.getElementById("select1");
  dropdown.selectedIndex = 1;
  console.log(dropdown.value);
  let work = document.createElement("Option");
  let workText = document.createTextNode("Work");
  work.appendChild(workText);
  work.setAttribute("value", "Work");
  dropdown.appendChild(work);
  let primarySchool = document.createElement("Option");
  let primarySchoolText = document.createTextNode("Primary School");
  primarySchool.appendChild(primarySchoolText);
  primarySchool.setAttribute("value", "Primary School");
  dropdown.insertBefore(primarySchool, dropdown.firstChild);
  dropdown.selectedIndex = 3;
  let button = document.getElementById("curValue");
  button.addEventListener("click", click);
  function click() {
    alert(dropdown.options[dropdown.selectedIndex].text);
  }
}
formPractice();
