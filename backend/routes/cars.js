const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const Car = require("../models/car");

router.get("/", (req, res, next) => {
  Car.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      if (docs.length >= 0) {
        res.status(200).json(docs);
      } else {
        res.status(404).json({ message: "No entries found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post("/", (req, res, next) => {
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
  });
  car
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Handling POST request to /cars",
        car: result,
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
    .exec()
    .then((doc) => {
      console.log(doc);
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: "No object found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch(":/carId", (req, res, next) => {
  const id = req.params.carId;
  Car.update(
    { _id: id },
    {
      $set: {
        brand: req.body.new_brand,
        type: req.body.new_type,
        model: req.body.new_model,
        price: req.body.new_price,
        mileage: req.body.new_mileage,
        year: req.body.new_year,
        fuelType: req.body.new_fuelType,
        engine: req.body.new_engine,
        country: req.body.new_country,
        image: req.body.new_image,
      },
    }
  )
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.delete("/:carId", (req, res, next) => {
  const id = req.params.carId;
  Car.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
