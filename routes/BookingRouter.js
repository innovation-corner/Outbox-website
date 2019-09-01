const express = require("express");
const router = express.Router();
const book = require("../Controllers/BookingController");

router.post("/new", book.placeBooking);
router.put("/update/:id", book.editBooking);
router.delete("/cacel/:id", book.cancelBooking);
router.get("/view/all", book.listLocationBookings);
router.get("/view/:id", book.viewBooking);

module.exports = router;
