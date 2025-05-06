const express = require("express");
const routes = require("./routes");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();

const { default: mongoose } = require("mongoose");

const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());
routes(app);

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
