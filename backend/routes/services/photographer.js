const express = require('express')
const app=express()
const router = require('express').Router();
const mongoose = require('mongoose')
let PhotoGrapher = require('../../models/photographer.model')

app.use(express.json())

router.route('/').get((req, res) => {
    const result= PhotoGrapher.find({},function(err,photographer){
      if(err)return res.status(err)
      res.json(photographer)
    })
})

module.exports = router;