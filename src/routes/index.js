const express = require("express");
const airportRoutes = require("./airport.routes");
const carRoutes = require("./car.routes");
const userRoutes = require("./user.routes");
const rentalRoutes = require("./rental.routes");
const router = express.Router();

router.use("/airport", airportRoutes);
router.use("/car", carRoutes);
router.use("/user", userRoutes);
router.use("/rental", rentalRoutes);

module.exports = router;