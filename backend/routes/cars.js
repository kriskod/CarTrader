const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const multer = require("multer");
const auth = require("../middlewares/auth");
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

const Car = require("../models/car");

router.get("/", (req, res, next) => {
  Car.find()
    .select(
      "_id brand type model price mileage year fuelType engine country carImage"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        cars: docs.map((doc) => {
          return {
            _id: doc._id,
            brand: doc.brand,
            type: doc.type,
            model: doc.model,
            price: doc.price,
            mileage: doc.mileage,
            year: doc.year,
            fuelType: doc.fuelType,
            engine: doc.engine,
            country: doc.country,
            carImage: doc.carImage,
            request: {
              type: "GET",
              url: "http://localhost:5000/cars/" + doc._id,
            },
          };
        }),
      };
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(response);
      } else {
        res.status(404).json({ message: "No entries found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", auth, upload.single("carImage"), (req, res, next) => {
  console.log(req.file);
  const car = new Car({
    _id: new mongoose.Types.ObjectId(),
    brand: req.body.brand,
    type: req.body.type,
    model: req.body.model,
    price: req.body.price,
    mileage: req.body.mileage,
    year: req.body.year,
    fuelType: req.body.fuelType,
    engine: req.body.engine,
    country: req.body.country,
    carImage: req.file.path,
  });
  car
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Car posted successfully",
        car: {
          _id: result._id,
          brand: result.brand,
          type: result.type,
          model: result.model,
          price: result.price,
          mileage: result.mileage,
          year: result.year,
          fuelType: result.fuelType,
          engine: result.engine,
          country: result.country,
          request: {
            type: "POST",
            url: "http://localhost:5000/cars/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get("/:carId", (req, res, next) => {
  const id = req.params.carId;
  Car.findById(id)
    .select(
      "_id brand type model price mileage year fuelType engine country carImage"
    )
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json({
          car: doc,
          request: {
            type: "GET",
            url: "http://localhost:5000/:carId",
          },
        });
      } else {
        res.status(404).json({ message: "No object found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch("/:carId", auth, (req, res, next) => {
  const id = req.params.carId;
  const updateObject = {};
  for (const ops of req.body) {
    updateObject[ops.newValue] = ops.value;
  }
  Car.update(
    { _id: id },
    { $set: updateObject },
    { $currentDate: { lastModified: true } }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "Updated successfully",
        request: {
          type: "GET",
          url: "http://localhost:5000/cars",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

router.delete("/:carId", auth, (req, res, next) => {
  const id = req.params.carId;
  Car.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Deleted",
        request: {
          type: "POST",
          url: "http://localhost:5000/cars",
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
