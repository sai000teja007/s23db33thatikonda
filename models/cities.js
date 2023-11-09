const mongoose = require("mongoose")
const citySchema = mongoose.Schema({
cityname: String,
citypopulation: Number,
cityrevenue: Number
})
module.exports = mongoose.model("cities", citySchema)