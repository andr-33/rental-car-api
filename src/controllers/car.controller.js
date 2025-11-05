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

carController.createCar = async (req, res) => {
  try {
    const { images, ...carData } = req.body;
    const createdCar = await carService.createCarInDB(carData);
    res.status(201).json(createdCar);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: {
        message: error.message || "Internal Server Error",
        code: "createCarError"
      }
    });
  }
};

carController.updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const { images, ...carData } = req.body;
    const updatedCar =  await carService.updateCarInDB(id, carData);
    res.status(200).json(updatedCar);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: {
        message: error.message || "Internal Server Error",
        code: "updateCarError"
      }
    });
  }
};

module.exports = carController;