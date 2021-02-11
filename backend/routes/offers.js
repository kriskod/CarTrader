const express = require("express");
const {
  getOffers,
  createOffer,
  getOfferById,
  updateOffer,
  deleteOffer,
  watchOffer,
} = require("../controllers/offers");
const isLoggedIn = require("../middleware/Auth");

const router = express.Router();

router.get("/", getOffers);
router.post("/", isLoggedIn, createOffer);
router.get("/:offerId", isLoggedIn, getOfferById);
router.put("/:offerId", isLoggedIn, updateOffer);
router.delete("/:offerId", isLoggedIn, deleteOffer);
router.patch("/:offerId/watch", isLoggedIn, watchOffer);

module.exports = router;
