const mongoose = require("mongoose") 
const TshirtSchema = mongoose.Schema({ 
 brand: String, 
 material: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("Tshirt", 
TshirtSchema)