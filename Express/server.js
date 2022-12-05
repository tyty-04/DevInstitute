const express = require("express");
const app = express();
const products = require("./Modules/modules");

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

app.use("/", express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/api/products/", (req, res) => {
//   console.log("req body: ", req.body);
//   const newProduct = [
//     {
//       id: products.length + 1,
//       name: req.body.name,
//       price: req.body.price,
//     },
//   ];
//   products.push(newProduct);
  res.json(products);
});

app.get("/api/products", (req, res) => {
  console.log("listening");
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const product = products.find((item) => item.id == id);
  if (!product) {
    return res.status(200).json({ msg: "Product not found" });
  }
  res.json({ product });
});

app.get("/api/search", (req, res) => {
  const name = req.query.q;
  console.log(name);
  res.json({ msg: "query ok" });

  const prodFilter = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
});
