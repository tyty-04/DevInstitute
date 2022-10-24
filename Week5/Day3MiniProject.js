const robots = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    image: "https://robohash.org/1?200x200",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    image: "https://robohash.org/2?200x200",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    image: "https://robohash.org/3?200x200",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
    image: "https://robohash.org/4?200x200",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
    image: "https://robohash.org/5?200x200",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
    image: "https://robohash.org/6?200x200",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
    image: "https://robohash.org/7?200x200",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
    image: "https://robohash.org/8?200x200",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
    image: "https://robohash.org/9?200x200",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
    image: "https://robohash.org/10?200x200",
  },
];

let body = document.querySelector("body");
let container = document.createElement("div");
container.setAttribute("id", "container");
body.appendChild(container);
for (let i = 0; i < robots.length; i++) {
  let roboName = robots[i].name;
  let roboEmail = robots[i].email;
  let roboImage = robots[i].image;

  let div = document.createElement("div");
  div.setAttribute("id", roboName);
  container.appendChild(div);

  let image = document.createElement("img");
  image.setAttribute("src", roboImage);
  div.appendChild(image);

  let name = document.createTextNode(roboName);
  let h3 = document.createElement("h3");
  h3.appendChild(name);
  div.appendChild(h3);

  let email = document.createTextNode(roboEmail);
  let p = document.createElement("p");
  p.appendChild(email);
  div.appendChild(p);
}

let input = document.getElementById("myInput");
container.insertBefore(input, container.firstChild);

function myFunction() {
  let filter = input.value.toUpperCase();

  let divs = document.querySelectorAll("div");
  for (i = 1; i < divs.length; i++) {
    txtValue = divs[i].id;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      divs[i].style.display = "";
    } else {
      divs[i].style.display = "none";
    }
  }
}
