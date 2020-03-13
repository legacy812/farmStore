const { model, Schema } = require('mongoose')

module.exports = model('user', new Schema({
  name: String,
  email: String,
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'item'
  }]
}))
