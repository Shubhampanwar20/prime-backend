const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");

/*
 ADMIN ONLY ROUTE
 GET /api/v1/admin/users
*/

router.get("/users", protect, adminOnly, (req, res) => {
  res.json({
    message: "Admin access granted",
    user: req.user
  });
});

module.exports = router;