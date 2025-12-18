const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    bookingId: {
        type: Number,
        unique: true,
        required: true
    },
    restaurantId: {
        type: Schema.Types.ObjectId,
        ref: 'Resturants',
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    guests: {
        type: Number,
        required: true,
        min: 1,
        max: 20
    },
    date: {
        type: String,
        required: true  // YYYY-MM-DD format
    },
    time: {
        type: String,
        required: true  // HH:MM format
    },
    specialRequests: {
        type: String,
        default: ""
    },
    status: {
        type: String,
        enum: ['confirmed', 'cancelled', 'pending', 'completed'],
        default: 'confirmed'
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    confirmationCode: {
        type: String,
        unique: true,
        sparse: true
    }
});

// Middleware to generate confirmation code before saving
bookingSchema.pre('save', function(next) {
    if (!this.confirmationCode) {
        this.confirmationCode = 'BK' + Date.now().toString().slice(-8);
    }
    next();
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
