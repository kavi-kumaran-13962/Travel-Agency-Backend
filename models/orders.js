const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  orderItems: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("order", orderSchema);
