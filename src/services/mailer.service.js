const mailer = require("../config/mailer.config");
const { render } = require("@react-email/components");
import RentalRequestConfirmation from "../utils/templates/RentalRequestConfirmation";
import RentalRequestNotification from "../utils/templates/RentalRequestNotification";

const mailerService = {};

mailerService.sendRentalRequestConfirmationEmail = async (recipientEmail, emailDetails) => {
  try {
    const html = await render(
      <RentalRequestConfirmation 
        name={emailDetails.full_name}
        modelCar={emailDetails.model}
        pickupDate={emailDetails.pickup_date}
        returnDate={emailDetails.return_date}
        airportCode={emailDetails.airport_code}
        airportCity={emailDetails.airport_city}
        totalDays={emailDetails.rental_days}
        totalAmount={emailDetails.total_amount}
      />
    );

    const mailOptions = {
      from: process.env.MAILER_USER,
      to: recipientEmail,
      subject: `Solicitud recibida - ${emailDetails.model}`,
      html: html,
    };
    await mailer.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
};

mailerService.sendRentalRequestNotificacionEmail = async (adminEmail, emailDetails) => {
  try{
    const html = await render(
      <RentalRequestNotification 
        name={emailDetails.full_name}
        phone={emailDetails.phone}
        modelCar={emailDetails.model}
        pickupDate={emailDetails.pickup_date}
        returnDate={emailDetails.return_date}
        airportCode={emailDetails.airport_code}
        airportCity={emailDetails.airport_city}
        totalDays={emailDetails.rental_days}  
        totalAmount={emailDetails.total_amount}
        bookingId= "12345"
      />
    );

    const mailOptions = {
      from: process.env.MAILER_USER,
      to: adminEmail,
      subject: "Nueva solicitud recibida",
      html: html,
    };
    await mailer.sendMail(mailOptions);
  } catch (error){
    console.error(error);
    throw new Error("Error sending email");
  }
};

module.exports = mailerService;