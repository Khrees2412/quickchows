const express = require("express");
const router = express.Router();

router.post("/", (req,res ) =>{
    res.json("your payment")
})

module.exports = router;