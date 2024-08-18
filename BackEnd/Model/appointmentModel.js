const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const appointmentSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },

    appointment_name: {
        type: String,
        trim: true,
        required: [true, "Appointment_name is required"],
    },

    appointment_date: {
        type: Date,
        required: true,
    },

    appointment_message: {
        type: String,
        trim: true,
        required: [true, "Appointment_message is required"],
    }
}, {timestamps: true});

const Appointment = mongoose.model("Appointment", appointmentSchema, "appointments");

module.exports = Appointment;