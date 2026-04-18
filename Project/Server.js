const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Contact = require("./models/Contact");
const Reservation = require("./models/Reservation");
const Order = require("./models/Order");
const Rating = require("./models/Rating");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/restaurantDB")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
res.send("Restaurant Server Running");
});

// CONTACT FORM
app.post("/contact", async (req,res)=>{
const contact = new Contact(req.body);
await contact.save();
res.json({message:"Message stored"});
});

// RESERVATION
app.post("/reserve", async (req,res)=>{
const reservation = new Reservation(req.body);
await reservation.save();
res.json({message:"Table reserved"});
});

// ORDER
app.post("/order", async (req,res)=>{
const order = new Order(req.body);
await order.save();
res.json({message:"Order placed"});
});

// RATING
app.post("/rating", async (req,res)=>{
const rating = new Rating(req.body);
await rating.save();
res.json({message:"Rating submitted"});
});

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});

app.listen(3000, () => {
console.log("Server running on http://localhost:3000");
});

app.post("/reserve", async (req,res)=>{

const reservation = new Reservation(req.body);

await reservation.save();

res.json({message:"Reservation successful"});
});