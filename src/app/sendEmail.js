// sendEmail.js
// local testing
const nodemailer = require('nodemailer');

async function sendEmail(to, subject, text) {
    const unparsedText = JSON.parse(text);
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'bookingsbakedaholicsa@gmail.com',
          pass: 'uezx gbps qfcu fyen',
        },
      });

  await transporter.sendMail({
    from: 'bookingsbakedaholicsa@gmail.com',
    to: 'bookingsbakedaholicsa@gmail.com',
    subject,
    text: JSON.stringify(unparsedText),
  });
  
  await transporter.sendMail({
    from: 'bookingsbakedaholicsa@gmail.com',
    cc:'orders.bakedaholicsa@gmail.com',
    to: unparsedText.email,
    subject: `Booking for ${unparsedText.name}`,
    text: "Thank you for making a booking with us we will provide feedback shortly",
  });
  

}

module.exports = sendEmail;
