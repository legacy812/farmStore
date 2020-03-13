module.exports = require('mongoose').connect('mongodb://localhost/farmdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})