const router = require("express").Router();
const jobRoutes = require("./jobs");
const searchRoutes = require("./search");
const uploadRoutes = require("./upload");

// Job routes
router.use("/jobs", jobRoutes);
router.use("/search", searchRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;
