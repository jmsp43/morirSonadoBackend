const mongoose = require('mongoose')
const Schema = mongoose.Schema


const Item = new mongoose.Schema({
   section: String,
   name: String,
   price: Number,
   description: String,
   amountOrdered: Number,
   order: {
      type: Schema.Types.ObjectId,
      ref: 'Order'
   }
})

const Order = new mongoose.Schema({
      price: Number,
      // numItems: Number,
      items: [Item]
})


module.exports = {
   Order: mongoose.model('Order', Order),
   Item: mongoose.model('Item', Item)
}