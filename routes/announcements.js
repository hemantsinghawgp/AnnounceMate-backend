const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Announcement = require('../models/Announcement');
const nodemailer = require('nodemailer');

// GET route remains the same
router.get('/', auth, async (req, res) => {
  try {
    const announcements = await Announcement.find().populate('createdBy', 'name');
    res.send(announcements);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Updated POST route
router.post('/', auth, async (req, res) => {
  try {
    const { message, targetGroups } = req.body;

    // Create and save the announcement
    const announcement = new Announcement({
      message,
      targetGroups,
      createdBy: req.userId
    });
    await announcement.save();

    // Set up email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Define email recipients based on target groups
    const emailRecipients = {
      'group1': 'faculty@university.edu',
      'group2': 'students@university.edu',
      'group3': 'staff@university.edu',
      'group4': 'alumni@university.edu',
      'group5': 'testannouncements@googlegroups.com'
    };

    // Prepare email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: targetGroups.map(groupId => emailRecipients[groupId]).join(','),
      subject: 'New Announcement',
      html: message
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).send(announcement);
  } catch (error) {
    console.error('Error creating announcement:', error);
    res.status(400).send({ error: 'Failed to create announcement' });
  }
});

module.exports = router;