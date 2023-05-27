const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
   section: String,
   name: String,
   price: Number,
   description: String,
   amountOrdered: Number
})

const Items = mongoose.model('Item', itemSchema)

module.exports = Items