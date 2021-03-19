const router = require("express").Router();
const jobRoutes = require("./jobs");
const searchRoutes = require("./search");

// Job routes
router.use("/jobs", jobRoutes);
router.use("/search", searchRoutes);

module.exports = router;
