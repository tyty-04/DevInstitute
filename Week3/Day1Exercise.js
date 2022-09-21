// //Exercise 1
// function infoAboutMe() {
//   console.log("My name is Tyler, I'm 18, and I love to play video games");
// }
// infoAboutMe();

// function infoAboutPerson(personName, personAge, personFavoriteColor) {
//   console.log(
//     `Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`
//   );
// }
// infoAboutPerson("David", 45, "blue");
// infoAboutPerson("Josh", 12, "yellow");

// //Exercise 2
// function calculateTip() {
//   let bill = Number(prompt("How much is the bill?"));
//   switch (true) {
//     case bill <= 50:
//       bill += bill * 0.2;
//       break;
//     case bill > 50 && bill < 200:
//       bill += bill * 0.15;
//       break;
//     case bill >= 200:
//       bill += bill * 0.1;
//       break;
//   }
//   console.log("Your final price is: " + bill);
// }
// calculateTip();

// //Exercise 3
// function isDivisible(divisor) {
//   let sum = 0;
//   for (let i = 0; i <= 500; i++) {
//     if (i % divisor == 0) {
//       sum += i;
//       console.log(i);
//     }
//   }
//   console.log(sum);
// }
// isDivisible(3);
// isDivisible(45);

// //Exercise 4
// let stock = {
//   banana: 6,
//   apple: 0,
//   pear: 12,
//   orange: 32,
//   blueberry: 1,
// };

// let prices = {
//   banana: 4,
//   apple: 2,
//   pear: 1,
//   orange: 1.5,
//   blueberry: 10,
// };

// let shoppingList = ["banana", "orange", "apple"];

// function myBill() {
//   let total = 0;
//   for (let i = 0; i < shoppingList.length; i++) {
//     if (shoppingList[i] in stock && stock[shoppingList[i]] != 0) {
//       stock[shoppingList[i]]--;
//       total += prices[shoppingList[i]];
//     }
//   }
//   return total;
// }

// console.log(myBill());

// //Exerciese 5
// function changeEnough(itemPrice, amountOfChange) {
//   let change =
//     0.25 * amountOfChange[0] +
//     0.1 * amountOfChange[1] +
//     0.05 * amountOfChange[2] +
//     0.01 * amountOfChange[3];
//   if (change >= itemPrice) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(changeEnough(14.11, [2, 100, 0, 0]));
// console.log(changeEnough(0.75, [0, 0, 20, 5]));

//Exercise 6
function hotelCost() {
  let nights = 0;
  while (true) {
    nights = prompt("How many nights are you staying");
    if (nights > 0) {
      break;
    }
  }
  return 140 * nights;
}

function planeRideCost() {
  while (true) {
    destination = prompt("What is your destination?");
    if (destination >= -Infinity) {
      continue;
    }
    else{
      destination = destination.toLowerCase();
      break;
    }
  }
  if (destination == "london") {
    return 183;
  } else if (destination == "paris") {
    return 220;
  } else {
    return 300;
  }
}

console.log(planeRideCost());

function rentalCarCost() {
  let days = 0;
  while (true) {
    days = prompt("How many days would you like to rent a car?");
    if (days > 0) {
      break;
    }
  }
  if (days > 10) {
    return days * 40 - days * 40 * 0.05;
  } else {
    return days * 40;
  }
}

function totalVacationCost() {
  return hotelCost() + planeRideCost() + rentalCarCost();
}

// console.log(totalVacationCost());
