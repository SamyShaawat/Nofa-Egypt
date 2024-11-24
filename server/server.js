const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

const app = express();
const upload = multer(); // For handling file uploads

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5174', // Your React app's origin
  methods: 'GET,POST,PUT,DELETE',  // Allow specific methods
  allowedHeaders: 'Content-Type',  // Allow specific headers
}));

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Your Gmail address
    pass: process.env.EMAIL_PASSWORD, // Your Gmail password or App Password
  },
});

// Email sending route
app.post('/send-email', upload.array('attachments'), (req, res) => {
  const { bcc, subject, text, links } = req.body;

  // Map the uploaded files into attachments for Nodemailer
  const attachments = req.files.map(file => ({
    filename: file.originalname,
    content: file.buffer,
  }));

  // Configure the email options
  const mailOptions = {
    from: process.env.EMAIL,
    bcc, // Use BCC to send to multiple recipients
    subject,
    text: `${text}\n\n${links}`, // Append links to the email body
    attachments, // Attach uploaded files
  };

  // Send the email using Nodemailer
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send('Email sent: ' + info.response);
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
