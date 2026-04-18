const mongoose = require("mongoose");

const RatingSchema = new mongoose.Schema({
name:String,
rating:Number,
review:String
});

module.exports = mongoose.model("Rating",RatingSchema);