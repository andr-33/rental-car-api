const express = require('express');
const rentalController = require('../controllers/rental.controller');
const verifyToken = require('../middleware/authTokenDecoder');
const router = express.Router();

router.get("/all-rentals", rentalController.getAllRentals);
router.post("/create-request", verifyToken, rentalController.createRentalRequest);
router.put("/update-status/:id", rentalController.updateRentalStatus);

module.exports = router;