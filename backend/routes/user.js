const express = require("express");
const router = express.Router();

require("dotenv").config();

//Controller
const UserController = require("../controllers/user");

//Routes
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.delete("/:userId", UserController.deleteUser);

module.exports = router;
