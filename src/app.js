const express = require("express");

const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");
const adminRoutes = require("./routes/adminRoutes");

const protect = require("./middleware/authMiddleware");

const app = express();

/* =========================
   MIDDLEWARE
========================= */

app.use(express.json());

/* =========================
   ROUTES
========================= */

// Authentication routes
app.use("/api/v1/auth", authRoutes);

// Task CRUD routes
app.use("/api/v1/tasks", taskRoutes);

// Admin routes
app.use("/api/v1/admin", adminRoutes);

/* =========================
   TEST PROTECTED ROUTE
========================= */

app.get("/api/v1/protected", protect, (req, res) => {
  res.json({
    message: "You accessed protected route",
    user: req.user
  });
});

/* =========================
   ROOT ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Prime Backend API Running 🚀");
});

/* =========================
   EXPORT APP
========================= */

module.exports = app;