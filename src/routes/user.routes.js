const express = require("express");
const userController = require("../controllers/user.controller");
const verifyToken = require("../middleware/authTokenDecoder");
const router = express.Router();

router.get("/auth", verifyToken, userController.getUser);
router.post("/create", userController.createUser);
router.post("/login", userController.login);

module.exports = router;