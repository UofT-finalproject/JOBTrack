const router = require("express").Router();
const s3Controller = require("../../controllers/s3Controller")

// Matches with "/api/upload"
router.route("/").get(s3Controller.upload);
router.route("/:key").delete(s3Controller.delete);

module.exports = router;
