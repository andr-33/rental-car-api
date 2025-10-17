const { createTransport } = require("nodemailer");

const mailer = createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASSWORD,
  }
});

module.exports = mailer;