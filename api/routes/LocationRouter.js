const express = require("express");
const router = express.Router();
const location = require("../Controllers/LocationController");

router.get("/", location.viewAllBusinessLocations);
router.post("/new", location.addLocation);
router.get("/:id", location.viewLocation);
router.put("/:id", location.editLocation);
router.delete("/:id", location.deleteLocation);

module.exports = router;
