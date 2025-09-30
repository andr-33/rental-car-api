const express = require('express');
const aiportController = require('../controllers/airport.controller');
const router = express.Router();

router.get("/all-airports", aiportController.getAllAirports);

module.exports = router;