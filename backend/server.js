const express = require("express");
const cors = require("cors");
const connectDB = require("./config");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");
const path = require("path");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve images

// Database Connection
connectDB();

// Routes
app.use("/auth", authRoutes);
app.use("/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
