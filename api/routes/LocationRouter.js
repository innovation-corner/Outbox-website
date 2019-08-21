const express = require("express");
const router = express.Router();
const location = require("../Controllers/LocationController");

router.post("/new", location.addLocation);

module.exports = router;
