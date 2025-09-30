const aiportService = require("../services/airport.service");
const aiportController = {};

aiportController.getAllAirports = async (req, res) => {
    try {
        const airports = await aiportService.getAllAirportsFromDB();
        res.json(airports);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = aiportController;