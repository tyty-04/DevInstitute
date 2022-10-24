// Exercise 1
// function biggestNumberInArray(arrayNumber) {
//   let biggest = arrayNumber[0];
//   arrayNumber.forEach((element) => {
//     if (element > biggest || isNaN(biggest)) {
//       biggest = element;
//     }
//   });
//   return isNaN(biggest) ? 0 : biggest;
// }

// const array = [-1, 0, 3, 100, 99, 2, 99];
// const array2 = ["a", 3, 4, 2];
// const array3 = [];

// console.log(biggestNumberInArray(array));
// console.log(biggestNumberInArray(array2));
// console.log(biggestNumberInArray(array3));

//Exercise 2
// function starFrame() {
//   let words = prompt("Enter words separated by commas");
//   let wordsArray = [];
//   while (words.indexOf(',') > 0) {
//     let comma = words.indexOf(",");
//     wordsArray.push(words.substring(0, comma));
//     words = words.substring(comma + 2, words.length);
//   }
//   wordsArray.push(words.substring(0, words.length));
//   let longest = wordsArray[0];
//   wordsArray.forEach((element) => {
//     if (element > longest) longest = element;
//   });
//   numStars = longest.length + 4;
//   for (let i = 0; i < numStars; i++) {
//     console.log("*");
//   }
//   for (let i = 0; i < wordsArray.length; i++) {
//     let line = "* " + wordsArray[i];
//     let spaces = numStars - line.length - 1;
//     for (let i = 0; i < spaces; i++){
//         line += " ";
//     }
//     line += "*";
//     console.log(line);
//   }
//   for (let i = 0; i < numStars; i++) {
//     console.log("*");
//   }
// }

// starFrame();

//Exercise 3
// function checkYear() {
//   let year = prompt("Enter a year");
//   year > 2000
//     ? console.log("You are in the 21st century")
//     : console.log("You live in the middle age");
// }

// checkYear();

//Exercise 4
function makeJuice(size) {
  let ingredients = [];
  function addIngredients(a, b, c) {
    ingredients.push(a);
    ingredients.push(b);
    ingredients.push(c);
  }
  function displayJuice() {
    document.write(`The client wants a ${size} juice, containing `);
    let index = 0;
    ingredients.forEach((element) => {
      if (index != ingredients.length - 1) {
        document.write(element + ", ");
      } else {
        document.write("and " + element + ".");
      }
      index++;
    });
  }
  addIngredients("orange", "strawberry", "banana");
  addIngredients("blueberry", "mango", "passion fruit");
  displayJuice();
}
makeJuice("medium");
