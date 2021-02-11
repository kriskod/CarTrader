require("dotenv").config({ path: "./.env" });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const connectDB = require("./config/mongodb");

const offerRoutes = require("./routes/offers");
const userRoutes = require("./routes/user");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
    return res.status(200).json({});
  }
  next();
});

app.use("/api/offers", offerRoutes);
app.use("/api/user", userRoutes);

connectDB();

app.listen(port, () => console.log(`Server is running on port ${port}`));
