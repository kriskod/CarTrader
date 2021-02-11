const jwt = require("jsonwebtoken");
const config = require("config");

const isLoggedIn = async (req, res, next) => {
  const secret = config.get("jwtSecret");
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied" });
  try {
    const verified = jwt.verify(token, secret);
    req.userId = verified.id;
    next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Invalid token" });
  }
};

const isAdmin = async (req, res, next) => {
  if (req.user.role === "basic") {
    return res.status(401).json({ message: "Access denied" });
  }
  next();
};

(module.exports = isLoggedIn), isAdmin;
