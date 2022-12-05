const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("Listening on port 8080");
});

app.use("/", express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  console.log("listening");
  const user = {
    firstname: "John",
    lastname: "Doe",
  };
  res.json(user);
});
