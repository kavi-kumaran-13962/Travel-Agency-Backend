const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cartItems: {
    type: Array,
    required: true,
  },
});
module.exports = mongoose.model("cart", cartSchema);
