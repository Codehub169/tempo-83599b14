const express = require('express');
const router = express.Router();
const { addContactSubmission } = require('../db/databaseService');

// POST /api/contact - Handles new contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields (name, email, message) are required.' });
  }

  // Validate email format (simple regex)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Invalid email format.' });
  }

  try {
    const submission = await addContactSubmission(name, email, message);
    console.log('Contact form submission successful:', submission);
    res.status(201).json({ success: true, message: 'Your message has been received!', submissionId: submission.id });
  } catch (error) {
    console.error('Error processing contact form submission:', error);
    res.status(500).json({ error: 'Failed to process your message. Please try again later.' });
  }
});

module.exports = router;
