const mongoose = require("mongoose");
const packageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numberOfDays: {
    type: Number,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Type: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Package", packageSchema);
