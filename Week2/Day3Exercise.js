//Exercise 1
let people = ["Greg", "Mary", "Devon", "James"];
people.splice(0, 1);
people.splice(2, 1, "Jason");
people.push("Tyler");
console.log(people.indexOf("Mary"));
let peopleCopy = people.slice(1, 2);
console.log(people.indexOf("Foo"));
let last = people[people.length - 1];

for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] == "Jason") {
    break;
  }
}

//Exercise 2
let colors = ["Red", "Green", "Blue", "Purple", " Black"];
for (let i = 0; i < colors.length; i++) {
  switch (i + 1) {
    case 1:
      console.log(`My 1st choice is ${colors[i]}`);
      break;
    case 2:
      console.log(`My 2nd choice is ${colors[i]}`);
      break;
    case 3:
      console.log(`My 3rd choice is ${colors[i]}`);
      break;
    default:
      console.log(`My ${i + 1}th choice is ${colors[i]}`);
      break;
  }
}

//Exercise 3
let number = 0;
do {
  number = Number(prompt("Pick a number"));
} while (number < 10);

//Exercise 4
let building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(
  building.nameOfTenants[1] +
    " has " +
    building.numberOfRoomsAndRent.dan[0] +
    " rooms"
);
if (
  building.numberOfRoomsAndRent.sarah[1] +
    building.numberOfRoomsAndRent.david[1] >
  building.numberOfRoomsAndRent.dan[1]
) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}

//Exercise 5
let family = {
  mom: "Marni",
  dad: "David",
  brother1: "Ryan",
  brother2: "Ethan",
};
for (let x in family) {
  console.log(x);
  console.log(family[x]);
}

//Exercise 6
let details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
let sentence = "";
for (let x in details) {
  sentence += `${x} ${details[x]} `;
}
console.log(sentence);

//Exercise 7
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let abr = "";
for (let i = 0; i < names.length; i++) {
  abr += names[i].substring(0, 1);
}
console.log(abr);
