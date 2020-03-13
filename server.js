const express = require('express')
const { join } = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const { User } = require('./models')
const app = express()


app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

app.use(require('./routes'))

require('./config')
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(e => console.error(e))

