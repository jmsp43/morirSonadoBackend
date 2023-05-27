const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
      price: Number,
      contents: Object,
      numItems: Number
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order