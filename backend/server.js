if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const User = require('./models/user.model')
const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
var cors = require('cors')
const initializePassport = require('./passport-config')

app.use(cors())
const users = []
initializePassport(
  passport
)
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(flash()) //////////////////////??????????????????????????????????
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

require('dotenv').config({ path: '.env' });

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const serviceRouter = require('./routes/service');
app.use('/service', serviceRouter)

app.post('/register', async (req, res) => {
  try {

    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const name = req.body.name
    const email = req.body.email
    const city = req.body.city
    const gender = req.body.gender
    const password = hashedPassword
    const usertype = 'enduser'
    const newUser = new User({
      email,
      name,
      city,
      gender,
      password,
      usertype
    })

    newUser.save()
      .then(() => {
        res.json('successful registeration')
      })
      .catch(err => {
        res.status(400).json('Error:' + err)
      });
  }
  catch {
    res.josn('something went wrong,Please try again.')
  }
}
)
app.post('/login',
  passport.authenticate('local', {
    failureFlash: true
  }),
  async (req, res) => {
    console.log(req)
    User.findOne({ email: req.body.email })
      .then(user => {
        res.json({
          "email": user.email,
          "name" : user.name,
          "city":user.city,
          "gender":user.gender,
        })
    res.status(200)
      })
  }
)

app.listen(8000, () => {
  console.log('Server is runngin on port number 8000.');
})