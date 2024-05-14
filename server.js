// app/server.js

const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./sendEmail'); // Your function for sending emails

const app = express();

app.use(bodyParser.json());

// Middleware to enable CORS for all routes
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// POST endpoint to send email
app.post('/api/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email' });
  }
});

// Handle GET requests for /api/send-email (optional)
app.get('/api/send-email', (req, res) => {
  res.status(405).json({ error: 'GET method not allowed. Use POST instead.' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
