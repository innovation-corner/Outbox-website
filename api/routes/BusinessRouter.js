const express = require("express");
const router = express.Router();
const business = require("../Controllers/BusinessController");

router.put("/:id", business.edit);
router.get("/:id", business.listUsers);

module.exports = router;
