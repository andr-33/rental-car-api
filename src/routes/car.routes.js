const express = require('express');
const carController = require('../controllers/car.controller');
const router = express.Router();

router.get("/all-cars", carController.getAllCars);

router.post("/create", carController.createCar);
router.put("/update/:id", carController.updateCar);
router.put("/toggle-status/:id", carController.updateCarStatus);

module.exports = router;