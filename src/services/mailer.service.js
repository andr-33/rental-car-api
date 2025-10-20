const mailer = require("../config/mailer.config");
const { render } = require("@react-email/components");
import RentalRequest from "../utils/templates/RentalRequest";
const mailerService = {};

mailerService.sendRentalRequestEmail = async (recipientEmail, rentalDetails) => {
  try {
    const { modelCar, pickupDate, pickupTime, pickupAirport, returnDate, returnTime, returnAirport, name, documento } = rentalDetails;
    const html = await render(
      <RentalRequest 
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

    console.log(name);

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