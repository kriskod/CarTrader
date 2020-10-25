const mongoose = require("mongoose");
const Car = require("../models/car");

exports.getCars = (req, res, next) => {
  Car.find()
    .select(
      "_id title description brand type model price mileage year fuelType engine country carImage"
    )
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        cars: docs.map((doc) => {
          return {
            _id: doc._id,
            title: doc.title,
            description: doc.description,
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
};

exports.addCar = (req, res, next) => {
  console.log(req.file);
  const car = new Car({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
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
          title: result.title,
          description: result.description,
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
};

exports.getCarById = (req, res, next) => {
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
};

exports.updateCar = (req, res, next) => {
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
};

exports.deleteCar = (req, res, next) => {
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
};
