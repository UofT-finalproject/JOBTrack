const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with "/api/jobs"
router.route("/")
    .get(searchController.findAll);

router.route("/muse")
    .get(searchController.findAllMuse);

module.exports = router;