const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

router.post("/", userController.CreateUser);
module.exports = router;
