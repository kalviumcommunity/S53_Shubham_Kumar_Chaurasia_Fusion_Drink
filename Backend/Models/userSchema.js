const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name:{
      type: String,
      required: [true, "Please add your name"],
    },
    username: {
      type: String,
      required: [true, "Please add username"],
      unique: [true, "Username already taken"],
      lowercase: [true, "Enter username in lowercase"]
    },
    password: {
      type: String,
      required: [true, "Please add password"],
      minlength: [8, "Password must be at least 8 characters long"],
    },
    wishlist:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cocktail"
    }],
  },
);

module.exports = mongoose.model("User", userSchema);