const router = require("express").Router();
const userRoutes = require("./books");
const authRoutes = require("./auth");
// Book routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
