const router = require('express').Router();
const express = require('express')
const app = express()
app.use(express.json())

const bridalRouter = require('./services/bridalwear');
router.use('/bridalwear', bridalRouter)

const groomRouter = require('./services/groomwear');
router.use('/groomwear', groomRouter)

const destinationRouter = require('./services/destination');
router.use('/destination', destinationRouter)

const makeupRouter = require('./services/makeup');
router.use('/makeup', makeupRouter)

router.route('/').get((req, res) => {
    res.send('I am services')
})  
router.route('/').post((req,res)=>{
    console.log('service post')
    res.send('request accepted at services.')
})

module.exports = router;