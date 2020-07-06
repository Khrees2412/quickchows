const express = require('express');
const order = require("./routes/order")
const payment = require("./routes/payment")

const app = express();
app.use("/order", order);
app.use("/payment", payment);

const PORT = 5001;

app.get('/',(req,res) => {
    res.send("Hello world")
})


app.post('/login', (req,res) => {
   const {name,email,password} = req.body;

   if(name && email && password){
       res.statusCode(200) && res.send("nice one!")
   }
}) 

app.post('/signup', (req,res) => {
   
}) 



app.listen(PORT, ()=> console.log(`listening at Port ${PORT}`))