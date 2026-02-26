const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes.js");

dotenv.config();

const app = express();

// Middleware
app.use(cors({
    origin:  "http://localhost:5173"
}));
app.use(express.json());

// Request logging middleware
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${new Date().toISOString()}`);
    next();
});

// Database connection
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/authDB");
        console.log("Connected to MongoDB");
        console.log("Database:", conn.connection.name);
    } catch (err) {
        console.error("MongoDB connection error:", err);
        console.log("Continuing without database connection...");
    }
};

// Initialize database connection
connectDB().then(() => {
    console.log("Database initialization complete");
}).catch(err => {
    console.error("Database initialization failed:", err);
});

// Routes (define routes outside database connection)
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Access at: http://localhost:${PORT}`);
});