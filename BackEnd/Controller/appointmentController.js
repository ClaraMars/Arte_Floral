const express = require("express");
const router = express.Router();
const {isAuth} = require("../lib/utils");

const Appointment = require("../Model/appointmentModel");
const User = require("../Model/userModel");


// Get all appointments from user
router.get("/appointments/:id_user", isAuth, async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const data = id_user && await Appointment.find({user_id: id_user}).exec();
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
router.post("/newappointment/:id_user", isAuth, async (req, res) => {
    try {
        const id_user = req.params.id_user;
        console.log(id_user);
        const data = new Appointment({
            user_id: id_user,
            appointment_name: req.body.appointment_name,
            appointment_date: req.body.appointment_date,
            appointment_message: req.body.appointment_message,
        });
        const datasaved = await data.save();

         // Actualizar el campo de listas del usuario con el ID de la lista nueva
        await User.findByIdAndUpdate(id_user, {
            $push: { appointment: datasaved._id },
      });

        res.status(200).json({
        status: "Success",
        data: datasaved,
        error: null,
        });

    } catch (error) {
        res.status(404).json({
        Status: "Error",
        data: null,
        error,
        });
    }
});

module.exports = router;
