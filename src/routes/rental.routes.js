const express = require('express');
const rentalController = require('../controllers/rental.controller');
const verifyToken = require('../middleware/authTokenDecoder');
const router = express.Router();

router.post("/create-request", verifyToken, rentalController.createRentalRequest);

module.exports = router;