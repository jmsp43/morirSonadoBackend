const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new mongoose.Schema({
      email: String,
      password: String,
      order: {
            type: Schema.Types.ObjectId,
            ref: 'Order'
      }
})

module.exports = mongoose.model('User', User)