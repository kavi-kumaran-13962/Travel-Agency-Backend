const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/Auth");
const packageRoutes = require("./routes/Packages");
const cartRoutes = require("./routes/Cart");
const ordersRoutes = require("./routes/Orders");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to db")
);

app.use(express.json());
app.set("port", process.env.PORT || 5000);

app.use("/api/user", authRoutes);
app.use("/api/package", packageRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", ordersRoutes);
app.listen(app.get("port"), () => console.log("hi"));
