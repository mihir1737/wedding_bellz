const express = require('express')
const app = express()
const router = require('express').Router();
const mongoose = require('mongoose')
let GroomWear = require('../../models/groomwear.model')
let auth = require('../../authorize.js');

app.use(express.json())

router.route('/').get((req, res) => {
  const result = GroomWear.find({}, function (err, groomwear) {
    if (err) return res.status(err)
    res.json(groomwear)
  })
})

router.route('/').post((req, res) =>

  auth.checkAuthenticated(req, res, () => {
    res.json("It's working..")
  })
)

module.exports = router;