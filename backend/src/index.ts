import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

import recipeRoutes from "./routes/RecipeRoutes";

dotenv.config({ path: '../.env' }); // Load environment variables from .env file
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/recipes", recipeRoutes);

// MongoDB connection
const connectDB = async () => {
  try {
    // Use the MongoDB connection string from .env
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected successfully!");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Stop the server if the DB connection fails
  }
};

connectDB(); // Connect to MongoDB when the server starts

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
