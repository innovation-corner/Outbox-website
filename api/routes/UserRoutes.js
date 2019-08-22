const express = require("express");
const router = express.Router();
const user = require("../Controllers/UserController");

router.post("/invite", user.inviteUser);

module.exports = router;