const express = require("express");
const router = express.Router();
const business = require("../Controllers/BusinessController");

router.put("/:id", business.edit);
router.get("/:id/users", business.listUsers);

module.exports = router;
