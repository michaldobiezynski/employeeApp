const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const data = require("../env.json");
require("./Employee");

const Employee = mongoose.model("employee");

mongoose.connect(data.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("connected to mongo");
  console.log(Employee);
});
mongoose.connection.on("error", (error) => {
  console.log("error connecting to mongo: " + error);
});

app.get("/", (req, res) => {
  console.log(data.MONGODB_URL);
  res.send("welcome to node js");
});

app.listen(3000, () => {
  console.log("server running");
});
