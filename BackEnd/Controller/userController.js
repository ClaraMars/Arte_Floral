const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const {generateToken} = require("../lib/utils");

const User = require("../Model/userModel");

// Register
router.post("/register", async (req, res) => {
  try {
    const data = new User({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    const datasaved = await data.save();
    res.status(200).json({ status: 200, data: datasaved });
  } catch (error) {
    res.status(400).json({ 
      status: 400, error: "Registration failed. Try again!" 
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email.toLowerCase() }).exec();
    if (!data) {
      throw new Error()}
    const password = await bcrypt.compare(req.body.password, data.password);
    if (!password) {throw new Error()};
    const userId = data._id;
    const token = generateToken(userId);
    res.status(200).json({
      status: 200,
      data: {
        _id: data._id,
        token: token,
        email: data.email,
        appointments: data.appointments,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      error: "Email or password incorrect",
    });
  }
});

module.exports = router;
