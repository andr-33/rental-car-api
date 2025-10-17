const mailer = require("../config/mailer.config");
const { from } = require("../config/supabase.config");
mailerService = {};

mailerService.sendRentalRequestEmail = async (recipientEmail, carModel) => {
  try {
    const mailOptions = {
      from: process.env.MAILER_USER,
      to: recipientEmail,
      subject: `Solicitu de renta - ${carModel}`,
      text: "Hola mundo"
    };
    await mailer.sendMail(mailOptions);
  } catch (error) {
    console.error(error);
    throw new Error("Error sending email");
  }
};

module.exports = mailerService;