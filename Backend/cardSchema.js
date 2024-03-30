const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    // user_id: {
    //   type: String,
    //   required: true,
    // },
    // unique id add later
    image: {
      type: String,
      required: [true, "Please add image your cocktail"],
    },
    name: {
      type: String,
      required: [true, "Please enter cocktail name"],
    },
    timePrep: {  // time to prepare
      type: String,
      required: [true, "Please enter time to prepare"],
    },
    ingredients: {
      type: String,
      required: [true, "Please add the ingredients"],
    },
  },

);