const carService = require("../services/car.service");
const carController = {};

carController.getAllCars = async (req, res) => {
    try {
        const cars = await carService.getAllCarsFromDB();
        res.json(cars);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = carController;