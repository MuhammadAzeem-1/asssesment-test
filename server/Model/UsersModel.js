const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  star: {
    type: Number,
  },
  productName: {
    type: String,
  },
});

const userModel = mongoose.model("userModels", userSchema);

module.exports = userModel;
