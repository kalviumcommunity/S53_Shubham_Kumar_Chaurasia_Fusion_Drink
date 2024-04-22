const mongoose = require("mongoose");

const cocktailSchema = mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please add Image"],
    },
    name: {
      type: String,
      required: [true, "Please add Name"],
      index: true,
    },
    about: {
      type: String,
      required: [true, "Please add About"],
    },
    preparationTime: {
      type: Number,
      required: [true, "Please add Time"],
      min: [1, "Preparation time must be greater than zero"],
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },
    ingredients: [{
      name: { type: String, required: true },
      quantity: { type: String, required: true },
      unit: { type: String }
    }],
    steps_to_prepare: {
      type: [String],
      required: true
    },
  },
);

// module.exports = cocktailSchema;
module.exports = mongoose.model("Cocktail", cocktailSchema);