const express = require('express')
const app=express()
const router = require('express').Router();
const mongoose = require('mongoose')
let Destination = require('../../models/destination.model')

app.use(express.json())

router.route('/').get((req, res) => {
    const result= Destination.find({},function(err,destination){
      if(err)return res.status(err)
      res.json(destination)
    })
})

module.exports = router;