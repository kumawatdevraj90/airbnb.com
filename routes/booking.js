const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controllers/bookings.js");

// Booking routes
router.get("/listings/:id/book", isLoggedIn, wrapAsync(bookingController.renderBookingForm));
router.post("/listings/:id/book", isLoggedIn, wrapAsync(bookingController.createBooking));

// User bookings
router.get("/bookings", isLoggedIn, wrapAsync(bookingController.showUserBookings));
router.delete("/bookings/:id", isLoggedIn, wrapAsync(bookingController.cancelBooking));

module.exports = router;