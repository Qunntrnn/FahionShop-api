const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const { default: mongoose } = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  return res.send("Hi");
});

mongoose
  .connect(`${process.env.MONGO_DB}`)
  .then(() => {
    console.log("Connect Success");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log("Sever is running in port:", +port);
});
