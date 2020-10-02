const express = require('express')
const app=express()
const router = require('express').Router();
const mongoose = require('mongoose')
let GroomWear = require('../../models/groomwear.model')

app.use(express.json())

router.route('/').get((req, res) => {
    const result= GroomWear.find({},function(err,groomwear){
      if(err)return res.status(err)
      res.json(groomwear)
    })
})

module.exports = router;