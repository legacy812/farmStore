const router = require('express').Router()
const { User } = require('../models')
const jwt = require('jsonwebtoken')

router.post('/users/login', (req, res) => {
  User.authenticate()(req.body.username, req.body.password, (err, user) => {
    if (err) throw err
    console.log(user)
    res.json({
      isLoggedIn: !!user,
      user: user.username,
      token: jwt.sign({ id: user._id }, 'farm')
    })
  })
})

router.post('/users/register', (req, res) => {
  User.register(new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    username: req.body.username
  }), req.body.password, err => {
    if (err) throw err
    res.sendStatus(200)
  })
})

module.exports = router