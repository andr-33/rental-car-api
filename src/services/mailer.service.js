const mailer = require("../config/mailer.config");
const { render } = require("@react-email/components");
import RentalRequestConfirmation from "../utils/templates/RentalRequestConfirmation";
const mailerService = {};

mailerService.sendRentalRequestConfirmationEmail = async (recipientEmail, rentalDetails) => {
  try {
    const { modelCar, pickupDate, pickupTime, pickupAirport, returnDate, returnTime, returnAirport, name, documento } = rentalDetails;
    const html = await render(
      <RentalRequestConfirmation 
        recipientEmail={recipientEmail}
        carModel={modelCar}
        pickupDate={pickupDate}
        pickupTime={pickupTime}
        pickupAirport={pickupAirport}
        returnDate={returnDate}
        returnTime={returnTime}
        returnAirport={returnAirport}
        name={name}
        documento={documento} 
      />
    );

    const mailOptions = {
      from: process.env.MAILER_USER,
      to: recipientEmail,
      subject: `Solicitu de renta - ${modelCar}`,
      html: html,
    };
    await mailer.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
};

module.exports = mailerService;