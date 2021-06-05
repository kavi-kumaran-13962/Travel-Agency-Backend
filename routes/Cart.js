const router = require("express").Router();
const Cart = require("../models/cart");
const verify = require("./VerifyToken");
router.post("/", verify, async (req, res) => {
  const userCart = Cart.findOne({ userId: req.user });
  if (userCart) {
    const savedCart = await Cart.updateOne(
      { userId: req.user },
      { $set: { cartItems: req.body.cartItems } }
    );
    res.send("Cart Updated");
  } else {
    const Cart = new Cart({
      userId: req.user,
      cartItems: req.body.cartItems,
    });
    const savedCart = await Cart.save();
    res.send("Added to cart");
  }
});
router.get("/", verify, async (req, res) => {
  const userCart = Cart.findOne({ userId: req.user });
  res.send(userCart.cartItems);
});
module.exports = router;
