const express = require("express");
const router = express.Router();
const auth = require("../Controllers/AuthController");

router.post("/register", auth.registerAdmin);
router.post("/complete-registration/:id", auth.verifyUser);
router.post("/login", auth.login);

module.exports = router;
