// let age = prompt("How old are you?");

// if (age == 18) {
//   console.log("Congratulations on your first year of driving. Enjoy the ride!");
// } else if (age < 18) {
//   console.log("Sorry, you are too young to drive this car. Powering off!");
// } else {
//   console.log("Powering On. Enjoy the ride!");
// }

// for (let i = 0; i <= 15; i++) {
//     if (i % 2 == 0){
//         console.log(i + " is even");
//     }
//     else {
//         console.log(i + " is odd");
//     }
// }

let names = ["john", "sarah", 23, "Rudolf", 34];
for (let i of names) {
  if (typeof i == "string") {
    if (i.substring(0, 1) != i.substring(0, 1).toUpperCase()) {
      console.log(i.substring(0, 1).toUpperCase() + i.substring(1, i.length));
    } else {
      console.log(i);
    }
  }
}
for (let i of names) {
  if (typeof i != "string") {
    break;
  } else {
    console.log(i);
  }
}
