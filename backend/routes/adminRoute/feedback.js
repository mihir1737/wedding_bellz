const express = require('express')
const app = express()
const router = require('express').Router();
const mongoose = require('mongoose')
let Feedback = require('../../models/feedback.model')
const fs = require('fs')
const path = require('path')
app.use(express.json())
router.route('/').get((req, res) => {
  const result = Feedback.find({}, function (err, feedback) {
    if (err) {
      console.log('error')
      return res.status(err)
    }
    else
      res.json(feedback)
  })
})

router.route('/:id').delete((req, res) => {
  Feedback.deleteOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.send(err);
    res.json({ message: 'Deleted' });
  })
})

module.exports = router;