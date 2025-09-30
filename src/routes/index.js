const express = require("express");
const airportRoutes = require("./airport.routes");
const carRoutes = require("./car.routes");
const router = express.Router();

router.use("/airport", airportRoutes);
router.use("/car", carRoutes);

module.exports = router;