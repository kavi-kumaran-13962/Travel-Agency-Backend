const router = require("express").Router();
const Orders = require("../models/orders");
const verify = require("./VerifyToken");
router.post("/", verify, async (req, res) => {
  const userOrders = Orders.findOne({ userId: req.user });
  if (userOrders) {
    const savedorders = await Orders.updateOne(
      { userId: req.user },
      { $set: { orderItems: req.body.orderItems } }
    );
    res.send("Orders Updated");
  } else {
    const orders = new Orders({
      userId: req.user,
      orderItems: req.body.orderItems,
    });
    const savedorders = await orders.save();
    res.send("Added to Orders");
  }
});
router.get("/", verify, async (req, res) => {
  const userOrders = Orders.findOne({ userId: req.user });
  res.send(userOrders.orderItems);
});
module.exports = router;
