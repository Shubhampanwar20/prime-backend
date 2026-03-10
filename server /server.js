import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import taskRoutes from "./src/routes/taskRoutes.js";
import authRoutes from "./src/routes/authRoutes.js";
import adminRoutes from "./src/routes/adminRoutes.js";

dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/v1/tasks", taskRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);

/* Test Route */
app.get("/", (req, res) => {
  res.send("Backend server running 🚀");
});

/* Server */
const PORT = 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});