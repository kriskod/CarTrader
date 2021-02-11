const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

exports.signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "User aleready exist" });
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      email,
      password: hashedPassword,
      username: username,
    });
    const secret = config.get("jwtSecret");
    const token = jwt.sign({ id: newUser._id, email: newUser.email }, secret, {
      expiresIn: 30 * 60,
    });
    res.status(201).json({ message: "User created", user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: error.meesage });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: "User with given email doesn't exist" });
    } else {
      const matchPasswords = await bcrypt.compare(password, user.password);
      if (!matchPasswords)
        return res.status(400).json({ message: "Invalid password" });
      const secret = config.get("jwtSecret");
      const token = jwt.sign({ email: user.email, id: user._id }, secret, {
        expiresIn: 30 * 60,
      });
      res.status(200).json({ message: "User logged in", user: user, token });
    }
  } catch (error) {
    res.status(500).json({ message: error.meesage });
  }
};
