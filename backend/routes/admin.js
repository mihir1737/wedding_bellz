const router = require('express').Router();
const express = require('express')
const app = express()
app.use(express.json())

const insertRouter = require('./adminRoute/insert');
router.use('/insert', insertRouter)

const feedbackRouter=require('./adminRoute/feedback')
router.use('/feedback',feedbackRouter)

module.exports = router;