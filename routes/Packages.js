const router = require("express").Router();
const Package = require("../models/package");
const verify = require("./VerifyToken");
router.post("/", verify, async (req, res) => {
  const package = new Package({
    numberOfDays: req.body.numberOfDays,
    Price: req.body.Price,
    Type: req.body.Type,
    date: req.body.date,
  });
  try {
    const savedPackage = await package.save();
    res.send(savedPackage);
  } catch (err) {
    res.status(400).send(err);
  }
});
router.get("/", verify, async (req, res) => {
  const packageList = await Package.find();
  res.send(packageList);
});

module.exports = router;
