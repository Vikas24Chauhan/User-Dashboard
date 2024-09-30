const mongoose = require('mongoose');

// const URI = "mongodb://localhost:27017/mern_admin";
const URI = process.env.MONGODB_URI;

// Set strictQuery to true or false as per your preference
mongoose.set('strictQuery', true); // or false

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1); // Exit with a failure code
  }
};

module.exports = connectDB;
