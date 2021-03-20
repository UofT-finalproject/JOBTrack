const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/jobs"
router.route("/")
    .get(searchController.findAll);

// Matches with "/api/jobs/:id"
// router
//   .route("/:id")
//   .get(searchController.findById)
router.route("/muse")
    .get(searchController.findAllMuse);

module.exports = router;