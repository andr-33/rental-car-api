const mailer = require("../config/mailer.config");
const { render } = require("@react-email/components");
import RentalRequest from "../utils/templates/RentalRequest";
const mailerService = {};

mailerService.sendRentalRequestEmail = async (recipientEmail, carModel) => {
  try {
    const html = await render(<RentalRequest recipientEmail={recipientEmail} carModel={carModel} />);

    const mailOptions = {
      from: process.env.MAILER_USER,
      to: recipientEmail,
      subject: `Solicitu de renta - ${carModel}`,
      html: html,
    };
    await mailer.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
};

module.exports = mailerService;