const { model, Schema } = require('mongoose')

const Item = model('item', new Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
  },
  price: {
    type: Integer,
  }
}))

module.exports = Item