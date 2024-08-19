const express = require("express");
const router = express.Router();
const {isAuth} = require("../lib/utils");

const Appointment = require("../Model/appointmentModel");
const User = require("../Model/userModel");


// Get all appointments from user
router.get("/appointments/:id_user", async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const data = id_user && await Appointment.find({user_id: id_user}).sort({_id: -1}).exec();
        if(!id_user) throw new Error("No appointments found");
        res.status(200).json({
        status: 200,
        data: data,
        });
    } catch (error) {
        res.status(404).json({
        status: 404,
        error: error,
        });
    }
});


// Create an appointment
router.post("/newappointment/:id_user", async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const data = new Appointment({
            user_id: id_user,
            appointment_name: req.body.name,
            appointment_date: req.body.date,
            appointment_message: req.body.message,
        });
        const datasaved = await data.save();
        await User.findByIdAndUpdate(id_user, {
            $push: { appointments: datasaved._id },
      });
        res.status(200).json({
        status: 200,
        data: datasaved,
        });
    } catch (error) {
        res.status(404).json({
        Status: 404,
        error,
        });
    }
});

// Update an appointment
router.patch("/updateappointment/:id_appointment", async (req, res) => {
    try {
        const id_appointment = req.params.id_appointment;
        const data = await Appointment.findByIdAndUpdate(id_appointment, {
            appointment_name: req.body.name,
            appointment_date: req.body.date,
            appointment_message: req.body.message,
        }, {new: true});
        res.status(200).json({
        status: 200,
        data: data,
        });
    } catch (error) {
        res.status(404).json({
        status: 404,
        error: error,
        });
    }
});

// Delete an appointment
router.delete("/deleteappointment/:id_appointment", async (req, res) => {
    try {
        const id_appointment = req.params.id_appointment;
        const data = await Appointment.findByIdAndDelete(id_appointment);
        res.status(200).json({
        status: 200,
        data: data,
        });
    } catch (error) {
        res.status(404).json({
        status: 404,
        error: error,
        });
    }
});

module.exports = router;
