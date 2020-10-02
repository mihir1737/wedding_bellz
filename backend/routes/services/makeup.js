const express = require('express')
const app=express()
const router = require('express').Router();
const mongoose = require('mongoose')
let MakeUp = require('../../models/makeup.model')

app.use(express.json())

router.route('/').get((req, res) => {
    const result= MakeUp.find({},function(err,makeup){
      if(err)return res.status(err)
      res.json(makeup)
    })
})

module.exports = router;