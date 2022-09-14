//Practice Exercise
let array = [8, 2,"Tyle", 5, "Orange", 2.7 , "nicky", 8, 19.2]
for (let i = 0; i < array.length; i++){
    if (typeof(array[i]) == "number" && i < 10){
        let temp = alert(" This number is less than 10");
    }
    else if (typeof array[i] == "string" && (array[i].charAt(array[i].length-1) == "a" || array[i].charAt(array[i].length-1) == "e" || array[i].charAt(array[i].length-1) == "i" || array[i].charAt(array[i].length-1) == "o" || array[i].charAt(array[i].length-1) == "u")){
        array[i] = array[i] + "s";
    }
    else {
        break;
    }
}

//Exercise 1
let x = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
console.log("x = " + x);
let y = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
console.log("y = " + y);

if (x > y) {
  console.log("x is greater than y");
} else if (x < y) {
  console.log("y is greater than x");
} else {
  console.log("x is equal to y");
}

//Exercise 2
let newDog = "Chihuahua";
console.log(newDog.length);
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
if (newDog == "Chihuahua") {
  console.log("I  love Chihuahuas, it’s my favorite dog breed");
} else {
  console.log("I dont care, I prefer cats");
}

//Exercise 3
let number = Number(prompt("Pick any number"));
if (number % 2 == 0) {
  console.log(number + " is an even number");
} else {
  console.log(number + " is an odd number");
}

//Exercise 4
let users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
if (users.length == 0){
    console.log("No one is online");
}
else if (users.length == 1){
    console.log(users[0] + " is online");
}
else if (users.length == 2){
    console.log(users[0] + " and " + users[1] + " are online");
}
else {
    let temp = users.length-2;
    console.log(users[0] + ", " + users[1] + ", and " + temp + " more are online");
}

