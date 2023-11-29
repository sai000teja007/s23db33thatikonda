const mongoose = require("mongoose")
const citySchema = mongoose.Schema({
    cityname: {
        type: String,
        minlength: 2,
        maxlength: 20,
    },

    citypopulation: {
        type: Number,
    },
    cityrevenue: {
        type:Number,
        min: 0,
        max: 5000,
    }
})
module.exports = mongoose.model("cities", citySchema)