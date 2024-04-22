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
    },
    password: {
      type: String,
      required: [true, "Please add password"],
    },
    wishlist:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cocktail"
    }],
  },
);

module.exports = mongoose.model("User", userSchema);