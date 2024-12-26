// contactController.js
const Contact = require('../modal/contact'); // Adjust the path as needed

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, country, contactNumber, email, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      country,
      contactNumber,
      email,
      message,
    });

    await newContact.save();
    res.status(200).json({ success: true, message: 'Data saved successfully!' });
  } catch (err) {
    console.error('Error saving data: ', err);
    res.status(500).json({ success: false, message: 'There was an error saving the data.' });
  }
};

module.exports = { createContact };





// require('dotenv').config(); // Load environment variables
// const Contact = require('../modal/contact'); // Adjust the path as needed
// const nodemailer = require('nodemailer'); // Import nodemailer

// const createContact = async (req, res) => {
//     try {
//         const { firstName, lastName, country, contactNumber, email, message } = req.body;
    
//         // Create a transporter for sending emails
//         const transporter = nodemailer.createTransport({
//           service: 'gmail', // Use the email service provider (e.g., Gmail)
//           auth: {
//             user: process.env.EMAIL_USER, // Your email address (use environment variable)
//             pass: process.env.EMAIL_PASS, // Your email password (use environment variable)
//           },
//         });
    
//         // Set up the email options
//         const mailOptions = {
//           from: email, // The sender's email address (user's email)
//           to: 'tejashreedhalgade10@gmail.com', // Recipient's email address
//           subject: 'New Contact Message', // Subject of the email
//           text: `You have received a new message from ${firstName} ${lastName}.\n\nCountry: ${country}\nContact Number: ${contactNumber}\nEmail: ${email}\nMessage: ${message}`, // The content of the email
//         };
    
//         // Send the email
//         await transporter.sendMail(mailOptions);
    
//         // Send a response to the client
//         res.status(200).json({ success: true, message: 'Message sent successfully!' });
//       } catch (err) {
//         console.error('Error sending email: ', err);
//         res.status(500).json({ success: false, message: 'There was an error sending the email.' });
//       }
// };

// module.exports = { createContact };
