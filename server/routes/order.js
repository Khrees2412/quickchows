const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json("nice app");
});

router.get("/:id", (req, res) => {
  res.json("nice app");
});
router.get("/all-purchases", (req, res) => {
  res.json("all orders");
});

router.post("/order", (req, res) => {
  res.json("nice app");
});

router.get("/item"),
  (req, res) => {
    res.json("haha");
  };

module.exports = router;
