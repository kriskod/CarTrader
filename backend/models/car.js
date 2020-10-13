const mongoose = require("mongoose");

const carSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  brand: String,
  type: String,
  model: String,
  price: Number,
  mileage: Number,
  year: Number,
  fuelType: String,
  engine: Number,
  country: String,
  image: String,
});
module.exports = mongoose.model("Car", carSchema);
