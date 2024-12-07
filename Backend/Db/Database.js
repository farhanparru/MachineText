const mongoose = require('mongoose');
require('dotenv').config();

// Ensure the MONGODBURL environment variable is set
const DB = process.env.MONGODBURL;

if (!DB) {
  console.error('MongoDB connection string not found! Please set MONGODBURL.');
  process.exit(1); // Exit if the DB URL is missing
}

const connectDB = async () => {
  try {
    // Attempt to connect to MongoDB
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds if no connection
    });
    console.log('Database connected successfully');
  } catch (err) {
    // Log any errors that occur during connection
    console.error('Database connection failed:', err.message);
    process.exit(1); // Exit if the database connection fails
  }
};

// Call the function to connect to the database
connectDB();
