const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
    fullname: {
        type: String,
        trim: true
    },
    gender: {
        type: String,
        trim: true
    },
    date: {
        type: String,
        trim: true
    },
    nationality: {
        type: String,
        trim: true
    },
    contact: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    poboxnumber: {
        type: String,
        trim: true
    },
    emergencycontact: {
        type: String,
        trim: true
    },
    passportnumber: {
        type: String,
        trim: true
    },
    visa: {
        type: String,
        trim: true
    },
    departure: {
        type: String,
        trim: true
    },
    destination: {
        type: String,
        trim: true
    }
});
module.exports = mongoose.model("Booking", bookingSchema);