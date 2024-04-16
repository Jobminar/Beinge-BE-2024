import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from 'cors';
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI;

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Using express.json() directly

// Routes
app.use("/", routes);

// MongoDB Connection
mongoose.connect(MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err.message));

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// Start server
app.listen(PORT, () => console.log("Server running on port", PORT));
