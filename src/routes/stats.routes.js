const express = require("express");
const statsController = require("../controllers/stats.controller");
const router = express.Router();

router.get("/monthly", statsController.getMonthlyRentalStats);

module.exports = router;