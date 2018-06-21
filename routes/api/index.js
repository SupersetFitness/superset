const router = require("express").Router();
const userRoutes = require("./books");

// Book routes
router.use("/users", userRoutes);

module.exports = router;
