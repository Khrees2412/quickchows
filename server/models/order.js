const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  food: {
    type: String,
    required: true,
  },
  createdAt: Date.now,
  status: {
    default: "In Progress",
    enum: ["In Progress", "Completed"],
  },
});
module.exports = Order = mongoose.model("order", orderSchema);
