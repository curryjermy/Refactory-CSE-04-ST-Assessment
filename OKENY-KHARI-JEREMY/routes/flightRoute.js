const express = require("express");
const router = express.Router();

const flight = require("../model/flights")

router.get("/flight", (req, res)=>{
    res.render("flightbooking");
});

router.post("/flight", (req, res)=>{
    const newFlightBooking = new Booking(req.body);
    newFlightBooking.save();
    res.redirect('/flight')
});

module.exports = router