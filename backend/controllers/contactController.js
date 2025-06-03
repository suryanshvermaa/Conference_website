const Contact=require("../models/Contact")

/**
 * 
 * @description Handles the creation of a new contact message.
 * @route POST /contact
 * @access Public
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
exports.createContact= async (req, res) => {
    try {
      const { name, email, subject, phone, message } = req.body;
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Please fill in all required fields.' });
      }
  
      const newContact = new Contact({
        name,
        email,
        subject,
        phone,
        message,
      });
  
      await newContact.save();
  
      res.status(201).json({ success: true, message: 'Your message has been submitted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server Error. Please try again later.' });
    }
};

/**
 * @description Fetches all contact messages.
 * @route GET /contact
 * @access private
 * @param {import("express").Request} req 
 * @param {import("express").Response} res 
 */
exports.getContact=async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 }); // newest first
      res.status(200).json(contacts);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      res.status(500).json({ error: 'Server Error. Could not fetch contacts.' });
    }
};