const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user");

exports.signupUser = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length > 1) {
        return res.status(401).json({ message: " Email already taken" });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({ error: err });
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              email: req.body.email,
              password: hash,
            });
            user
              .save()
              .then((result) => {
                console.log(result);
                res.status(201).json({ message: "User created successfully" });
              })
              .catch((err) => {
                console.error(err);
                res.status(500).json({ error: err });
              });
          }
        });
      }
    });
};

exports.loginUser = (req, res, next) => {
  User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res
          .status(401)
          .json({ message: "Authorization failed, user not found" });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { email: user[0].email, userID: user[0]._id },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
          );
          return res
            .status(200)
            .json({ message: "Authorization successfull", token: token });
        }
        if (err) {
          return res.status(401).json({ message: "Authorization failed" });
        }
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err });
    });
};
