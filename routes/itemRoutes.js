const router = require('express').Router()
const { Item } = require('../models')

router.get('/items', (req, res) => {
  Item.find()
    .then(items => res.json(items))
    .catch(e => console.error(e))
})

router.post('/items', (req, res) => {
  Item.create(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})
router.delete('/items', (req, res) => {
  Item.findByIdAndDelete(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

router.delete('/items', (req, res) => {
  Item.findByIdAndDelete(req.body)
    .then(() => res.sendStatus(200))
    .catch(e => console.error(e))
})

module.exports = router