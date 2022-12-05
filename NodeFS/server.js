const { Router } = require("express");
const express = require("express");
const app = express();
const products = require("./modules/modules.js");
const { db } = require("./nodedb.js");

// server listening on port
app.listen(1234, () => {
  console.log("listening on port 1234");
});

// middlewares
app.use("/", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/products", Router);

