const mongoose = require("mongoose")
const TshirtSchema = mongoose.Schema({
    brand: String,
    material: String,
    cost: {
        type: Number,
        minlength: 0,
        maxlength: 3
    },
})

module.exports = mongoose.model("Tshirt", TshirtSchema)