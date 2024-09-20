

const nodemailer = require("nodemailer");
const template = require("../commonServices/emailTemplates");

// Create a transporter object using Elastic Email's SMTP server
const transporter = nodemailer.createTransport({
  host: process.env.SMPT_HOST,
  port: process.env.SMPT_PORT, // Use 465 for SSL
  secure: true, // Set to true if using port 465 (SSL)
  auth: {
    user: process.env.SMPT_USER, // Your Elastic Email account email
    pass: process.env.SMPT_PWD, // Your Elastic Email SMTP API key
  },
});

// Email function for Appointment Booking
function appointmentMail(user) {
  console.log("user: ", user);

  let output = template.appointmentMailTemplate(user);
  let mailOptions = {
    from: process.env.SMPT_USER,
    to: user.email,
    subject: "Appoinment Booking",
    text: "Appoinment Booking",
    html: output,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    console.log("info: ", info);
    if (error) {
      console.log("error: ", error);
      return error;
    }
    return { message: "email is sent" };
  });
}

module.exports = { appointmentMail };
