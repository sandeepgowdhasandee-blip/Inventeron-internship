const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
food:String,
quantity:Number
});

module.exports = mongoose.model("Order",OrderSchema);