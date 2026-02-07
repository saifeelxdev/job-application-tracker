const express = require("express");
const router = express.Router();

const { authMiddlware } = require("../middleware/auth.middleware");
const profileController = require("../controllers/profile.controller");

router.get("/", authMiddlware, profileController);

module.exports = router;
