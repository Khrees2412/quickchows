const express = require("express");
const authRoutes = require("./routes/auth");
const order = require("./routes/order");
const payment = require("./routes/payment");

const app = express();
app.use("/auth/user", authRoutes);
app.use("/order", order);
app.use("/payment", payment);

const PORT = process.env.PORT || 5001;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => console.log(`listening at Port ${PORT} on ${Date()}`));
