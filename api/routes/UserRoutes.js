const express = require("express");
const router = express.Router();
const user = require("../Controllers/UserController");

router.post("/invite", user.inviteUser);
router.put('/edit/:id', user.edit);
router.delete('/delete/:id', user.delete);

module.exports = router;