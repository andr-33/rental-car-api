const statsService = require("../services/stats.service");
const statsController = {};

statsController.getMonthlyRentalStats = async (req, res) => {
  try {
    const { year, month } = req.query;

    const targetYear = year ? parseInt(year) : null;
    const targetMonth = month ? parseInt(month) : null;

    if (year && (isNaN(targetYear) || targetYear < 2000 || targetYear > 2100)) {
      throw new Error("Año inválido");
    }
    if (month && (isNaN(targetMonth) || targetMonth < 1 || targetMonth > 12)) {
      throw new Error("Mes inválido");
    }
    const monthlyStats = await statsService.getMonthlyRentalStats(targetYear, targetMonth);

    res.status(200).json(monthlyStats);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: {
        message: error.message || "Internal Server Error",
        code: "getMonthlyRentalStatsError"
      }
    });
  }
};

module.exports = statsController;
