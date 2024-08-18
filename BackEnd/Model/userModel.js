const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      trim: true,
      cast: false,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      trim: true,
      cast: false,
      required: [true, "Password is required"],
    },
    appointments: [
      {
        type: Schema.Types.ObjectId,
        ref: "appointments",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
