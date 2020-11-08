const express = require('express')
const app = express()
const router = require('express').Router();
const mongoose = require('mongoose')
let User = require('../../models/user.model')
app.use(express.json())

router.route('/:id').delete((req, res) => {
  Feedback.deleteOne({ _id: req.params.id }, function (err, user) {
    if (err) return res.send(err);
    res.json({ message: 'Deleted' });
  })
})

module.exports = router;