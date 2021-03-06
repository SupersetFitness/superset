const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");

// User routes
router.use("/users", userRoutes);
//Auth routes
router.use("/auth", authRoutes)

module.exports = router;
