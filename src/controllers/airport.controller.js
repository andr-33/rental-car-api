const aiportService = require("../services/airport.service");
const aiportController = {};

aiportController.getAllAirports = async (req, res) => {
    try {
        const airports = await aiportService.getAllAirportsFromDB();
        res.status(200).json(airports);
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).json({ 
            error: {
                message: error.message || "Internal Server Error",
                code: "getAirportsError"
            }
        });
    }
};

module.exports = aiportController;