const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter for sending the email
  const transporter = nodemailer.createTransport({
    service: 'your_email_service_provider', // e.g., 'gmail', 'hotmail'
    auth: {
      user: 'your_email@example.com',
      pass: 'your_email_password',
    },
  });

  // Set up the email data
  const mailOptions = {
    from: 'your_email@example.com',
    to: 'recipient@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    } else {
      console.log('Email sent: ' + info.response);
      res.json({ success: true });
    }
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
