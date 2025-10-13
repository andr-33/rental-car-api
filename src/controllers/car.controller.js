const carService = require("../services/car.service");
const carController = {};

carController.getAllCars = async (req, res) => {
    try {
        const cars = await carService.getAllCarsFromDB();
        res.status(200).json(cars);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ 
            error: {
                message: error.message || "Internal Server Error",
                code: "getCarsError"
            }
        });
    }
};

module.exports = carController;