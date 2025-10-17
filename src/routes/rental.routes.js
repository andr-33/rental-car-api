const express = require('express');
const rentalController = require('../controllers/rental.controller');
const router = express.Router();

router.post("/rental-request", rentalController.rentalRequest);

module.exports = router;