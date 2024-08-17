const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

// Conexión a MongoDB Atlas
const URL = process.env.DATABASE_URL;
mongoose.connect(URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once("connected", () => {
  console.log("Database connected");
});

db.on("disconnected", () => {
  console.log("Database disconnected");
});

db.on("error", (error) => {
  console.log("Database error", error);
});

const user = require("./Controller/userController");
app.use("/", user);

const appointment = require("./Controller/appointmentController");
app.use("/", appointment);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
