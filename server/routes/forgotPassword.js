const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

// Create a transporter to send emails (configure according to your email provider)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jagruthi.kakumanu07@gmail.com',
    pass: 'Infosys#143',
  },
});

// Route to handle forgot password request
router.post('/forgotpassword', async (req, res) => {
  const { email } = req.body;

  try {
    // Generate a unique token
    const token = generateToken(); // Implement your token generation logic

    // Send password reset email
    await transporter.sendMail({
      from: 'jagruthi.kakumanu07@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      html: `
        <p>You have requested to reset your password. Click the link below to reset your password:</p>
        <a href="http://localhost:3000/resetpassword/${token}">Reset Password</a>
      `,
    });

    res.status(200).send('Password reset email sent!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error sending email');
  }
});

module.exports = router;
