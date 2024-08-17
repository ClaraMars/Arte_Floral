const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../Model/userModel");

// Register
router.post("/register", async (req, res) => {
  try {
    const data = new User({
      email: req.body.email,
      password: await bcrypt.hash(req.body.password, 10),
    });
    const datasaved = await data.save();
    res.status(200).json({ status: 200, data: datasaved, error: null });
  } catch (error) {
    res.status(400).json({ 
      status: 400, data: null, error: "Fallo register" 
    });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email.toLowerCase() }).exec();
    if (!data) {
      console.log("Email not found");
      throw new Error()}
    
    const password = await bcrypt.compare(req.body.password, data.password);
    if (!password) {throw new Error()}
    res.status(200).json({
      status: 200,
      data: {
        _id: data._id,
        email: data.email,
        password: data.password,
        appointment: data.appointment,
      },
      error: null,
    });
  } catch (error) {
    res.status(404).json({
      status: 404,
      data: null,
      error: "Fallo Login - Email or password incorrect",
    });
  }
});








// POR COMPLETAR
// Update User´s info

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await User.updateOne(
      { _id: id },
      {
        $set: body,
      },
      { new: true, upsert: false }
    );
    res
      .status(200)
      .json({ status: "Success updating user info", data, error: null });
  } catch (error) {
    res
      .status(401)
      .json({ status: "Failed updating user info", data: null, error });
  }
});

// Get user info

router.get("/userinfo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).exec();
    res.status(200).json({ status: "Success getting user info", data, error: null });
  } catch (error) {
    res.status(401).json({ status: "Failed getting user info", data: null, error });
  }
});

module.exports = router;
