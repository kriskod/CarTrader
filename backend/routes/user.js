const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");
const UserController = require("../controllers/user");

router.post("/signup", UserController.signupUser);
router.post("/login", UserController.loginUser);

module.exports = router;
