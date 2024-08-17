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
    appointment: [
      {
        type: Schema.Types.ObjectId,
        ref: "appointment",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
