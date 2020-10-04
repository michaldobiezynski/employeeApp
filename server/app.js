const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const data = require("../env.json");

app.get("/", (req, res) => {
  console.log(data.MONGODB_URL);
  res.send("welcome to node js");
});

app.listen(3000, () => {
  console.log("server running");
});
