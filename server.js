const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const leadRoutes = require("./routes/leadRoutes");

dotenv.config();

// Connect Database
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Mini CRM API Running...");
});

app.use("/api/leads", leadRoutes);
app.use("/api/auth", authRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.send("Mini CRM API Running...");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});