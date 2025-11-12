const mailerService = require("../services/mailer.service");
const rentalService = require("../services/rental.service");
const userService = require("../services/user.service");
const rentalController = {};

rentalController.createRentalRequest = async (req, res) => {
  const user_id = req.userId;

  const allowedFields = [
    "car_id", "pickup_date", "return_date", "rental_days",
    "total_amount", "address", "country", "city", "zip_code"
  ];

  const rental = {
    user_id,
    ...Object.fromEntries(Object.entries(req.body).filter(([key]) => allowedFields.includes(key)))
  };

  try{
    const createdRental = await rentalService.createRentalInDB(rental);

    const userEmail = await userService.getUserEmailFromDB(user_id);
    await mailerService.sendRentalRequestConfirmationEmail(userEmail, rental);

    res.status(201).json(createdRental);
  } catch (error) {
    console.error(error);
    res.status(error.status || 500).json({
      error: {
        message: error.message || "Internal Server Error",
        code: "createRentalError"
      }
    });
  }
};

module.exports = rentalController;