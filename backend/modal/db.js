// models/db.js
const mongoose = require('mongoose');

// MongoDB connection URI
const dbURI = 'mongodb://localhost:27017/website';  // Connect to 'website' database

// Function to connect to the database
const connectDB = async () => {
    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error: ', err);
        process.exit(1);  // Exit the process if DB connection fails
    }
};

module.exports = connectDB;
