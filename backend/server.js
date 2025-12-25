require("dotenv").config();
const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");


const app = express();

app.use(cors({
    origin:"*",
    methods:["GET,POST"]
}))
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECERT,
})


// create order

app.post("/create-order", async (req, res) => {


    try {
        const { amount } = req.body

        if (!amount) return res.status(400).json({
            error: "amount is require"
        })

        const order = await razorpay.orders.create({
            amount: amount * 100,
            currency: "INR",
            receipt: receipt_${Date.now()}
        })
    } catch (err) {
        return res.status(500).json({
            error: err.message
        })
    }
})

app.post("verify-payment", async (req, res) => {
    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
    } = req.body

    const body = razorpay_order_id + "|" + razorpay_payment_id

    const expectSignature = crypto.createHmac("sha256",process.env.RAZORPAY_KEY_SECERT).update(body).digest

    if(expectSignature === razorpay_signature){
        res.json({
            success:true
        })
    }
    else{
        res.status(400).json({
            success:false
        })
    }


})

// gaurav // 34r5ytfe3



app.listen(4000, () => {
    console.log("Backend Is running","http://localhost:4000")
})