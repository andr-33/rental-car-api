const mailerService = require("../services/mailer.service");
const mailerController = {};

mailerController.rentalRequest = async (req, res) => {
  const { recipientEmail, carModel } = req.body;

  try {
    await mailerService.sendRentalRequestEmail(recipientEmail, carModel);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: {
        message: error.message || "Internal Server Error",
        code: "sendEmailError",
      },
    });
  }
};

module.exports = mailerController;