const express = require("express");
const router = express.Router();
const user = require("../Controllers/UserController");

router.post("/invite", user.inviteUser);
router.put('/:id/edit', user.edit);
router.delete('/:id/delete', user.delete);

module.exports = router;