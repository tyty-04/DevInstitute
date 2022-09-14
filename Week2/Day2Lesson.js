// if (condition){
//     exression
// }

// let x = 20;
// if (x == 10) {
//   console.log("x = 10");
// } else if (x > 10) {
//   console.log("x > 10");
// } else {
//   console.log("x < 10");
// }

// let fruit = prompt("What fruit would you like?");

// switch (fruit) {
//   case "Orange":
//     console.log("Oranges are $3 per pound");
//     break;
//   case "Strawberry":
//   case "Blueberry":
//     console.log("Strawberries are $1 per pound");
//     break;
//   case "Melon":
//     console.log("Melons are $2 per pound");
//     break;

//   default:
//     console.log(`We are out of ${fruit}, sorry`);
//     break;
// }

let person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(x); //fname lname age
  console.log(person[x]); // John Doe 25
}

let i = 0;
do {
  console.log("The number is " + i);
  i++;
} while (i < 10);
