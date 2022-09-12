//Exercise 1
let food = "Chicken Lo Mein";
let meal = "Dinner";
console.log(`I eat ${food} at every ${meal}`);

//Exercise 2
let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = myWatchedSeries.toString();
console.log(
  `I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`
);
myWatchedSeries.splice(2, 1, "friends");
myWatchedSeries.push("cobra kai");
myWatchedSeries.unshift("rings of power");
myWatchedSeries.splice(1, 1);
console.log(myWatchedSeries[1].charAt(2));
console.log(myWatchedSeries);

//Exercise 3
let tempC = 25;
let tempF = (tempC / 5) * 9 + 32;
console.log(`${tempC}°C is ${tempF}°F`);
