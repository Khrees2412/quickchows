const router = require("express").Router();
const User = require("../models/user");

router.get("/signup", (req, res) => {
  res.json({ message: "received" });
});

router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const userDetails = {
    email,
    name,
    password,
  };
  const user = User.find({ email });
  if (!user) {
    User.create({ userDetails });
  }
  res.json({ message: "user already exists" });
});

router.post("/login", (req, res) => {
  res.json({ message: "login received" });
});

module.exports = router;
