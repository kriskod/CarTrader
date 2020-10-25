const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const auth = require("../middlewares/auth");

//Middlewares
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      `${new Date().toISOString().replace(/:/g, "-")}` +
        "_" +
        `${file.originalname.split(" ").join("_")}`
    );
  },
});
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//Controllers
const CarController = require("../controllers/car");
//Routes
router.get("/", CarController.getCars);
// router.get("/:page", CarController.getCarsLimited);
router.post("/", auth, upload.single("carImage"), CarController.addCar);
router.get("/:carId", CarController.getCarById);
router.patch("/:carId", auth, CarController.updateCar);
router.delete("/:carId", auth, CarController.deleteCar);

module.exports = router;
