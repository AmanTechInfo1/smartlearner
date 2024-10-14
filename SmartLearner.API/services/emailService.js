const nodemailer = require("nodemailer");

class EmailService {
  async sendEmail(to, subject, text) {
    try {
      // Create a nodemailer transporter using SMTP
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      });

      // Send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"Your App" <${process.env.SMTP_EMAIL}>`, // sender address
        to, // list of receivers
        subject, // Subject line
        text, // plain text body
      });

    } catch (err) {
      throw new Error(err.message);
    }
  }
}

module.exports = new EmailService();
