const router = require("express").Router();
const jobRoutes = require("./jobs");
const searchRoutes = require("./search");
const s3Routes = require("./s3");

// Job routes
router.use("/jobs", jobRoutes);
router.use("/search", searchRoutes);
router.use("/s3", s3Routes);

module.exports = router;
