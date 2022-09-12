let addressNumber = 1901;
let addressStreet = "Beuna Vista Rd";
let country = "United States";

let globalAddress = `I live at ${addressNumber} ${addressStreet} in the ${country}`;

console.log(globalAddress);

let birthYear = 2004;
let futureYear = Math.floor(Math.random() * (3000 - 2022 + 1)) + 2022;
let futureAge = futureYear - birthYear;

console.log(`I will be ${futureAge} in ${futureYear}`);

let pets = ["cat", "dog", "fish", "rabbit", "cow"];
console.log(pets[1]);
pets.splice(3, 1, "horse");
console.log(pets.length);

let object1 = {
  username: "Hello",
  password: "World",
};
let object2 = {
  username: "Hello",
  timeline: "World",
};
let object3 = {
  username: "Hello",
  timeline: "World",
};
let object4 = {
  username: "Hello",
  timeline: "World",
};

let database = [object1];

let newsfeed = [object2, object3, object4];
