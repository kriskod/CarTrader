const Offer = require("../models/offer");
const mongoose = require("mongoose");

exports.getOffers = async (req, res) => {
  try {
    const offers = await Offer.find();
    if (offers.length < 1) {
      res.status(203).json({ message: "No data found" });
    } else {
      res.status(200).json({ count: offers.length, offers });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.createOffer = async (req, res) => {
  const offer = req.body;
  const newOffer = new Offer({
    ...offer,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newOffer.save();
    res.status(201).json({ message: "Offer created", offer: newOffer });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getOfferById = async (req, res) => {
  const id = req.params.offerId;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No offer with id:${id}` });
  try {
    const offer = await Offer.findById(id);
    res
      .status(200)
      .json({ message: `Offer with id:${id} found`, offer: offer });
  } catch (error) {
    res.status(500).json({ message: error.mesage });
  }
};

exports.updateOffer = async (req, res) => {
  const id = req.params.offerId;
  console.log(id);
  const {
    brand,
    title,
    description,
    type,
    model,
    price,
    mileage,
    year,
    fuelType,
    engine,
    country,
    carImage,
  } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No offer with id:${id}` });
  const updatedOffer = {
    _id: id,
    brand,
    title,
    description,
    type,
    model,
    price,
    mileage,
    year,
    fuelType,
    engine,
    country,
    carImage,
  };
  await Offer.findByIdAndUpdate(id, updatedOffer, { new: true });
  res.status(201).json(updatedOffer);
};

exports.deleteOffer = async (req, res) => {
  const id = req.params.offerId;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ message: `No offer with id:${id}` });
  await Offer.findOneAndDelete(id);
  res.json({ message: "Offer deleted" });
};

exports.watchOffer = async (req, res) => {
  const id = req.params.offerId;
  if (!req.userId) return res.json({ message: "Unauthorized" });
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No offer with id:${id}`);
  const offer = await Offer.find(id);
  const index = offer.watch.findIndex((id) => id === String(req.userId));
  if (index === -1) {
    offer.watch.push(req.userId);
  } else {
    offer.watch.filter((id) => id !== String(req.userId));
  }
  const watchedOffer = await Offer.findByIdAndUpdate(id, offer, { new: true });
  res.json(watchedOffer);
};
