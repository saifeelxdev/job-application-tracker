const express = require("express");
const router = express.Router();

const { fetchJobController } = require("../controllers/fetchJobs.controller");
const { authMiddlware } = require("../middleware/auth.middleware");

router.get("/jobs", authMiddlware, fetchJobController);

module.exports = router;
