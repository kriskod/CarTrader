const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  fuelType: {
    type: String,
    required: true,
  },
  engine: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
  },
});
module.exports = mongoose.model("Car", carSchema);
