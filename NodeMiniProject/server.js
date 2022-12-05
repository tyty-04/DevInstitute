let Parser = require("rss-parser");
let parser = new Parser();

let facts = [];
let categories = [];

(async () => {
  let feed = await parser.parseURL("https://www.thefactsite.com/feed/");

  feed.items.forEach((item) => {
    categories.push(...item.categories);
    let newFact = {
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      creator: item.creator,
      categories: item.categories,
      description: item.contentSnippet,
    };
    facts.push(newFact);
  });
  console.log(categories);
})();

const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.get("/", (req, res) => {
  res.render("pages/home");
});

app.get("/search", (req, res) => {
  res.render("pages/search");
});
