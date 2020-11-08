const express = require('express')
const app=express()
const router = require('express').Router();
const mongoose = require('mongoose')
//let BridalWear = require('../../models/bridalwear.model')

app.use(express.json())

router.route('/').get((req, res) => {
    
    // const result= BridalWear.find({},function(err,bridalWear){
    //   if(err)return res.status(err)
    //   res.json(bridalWear)
    // })
})
// router.route('/').post(async (req,res)=>{
//   try
//   {
//     const Name=req.body.Name
//     const City = req.body.City
//     console.log(req.body)
//     console.log(Name)
//     console.log(City)
//     const newBridalWear= new BridalWear({
//         Name,
//         City
//     })
//     newBridalWear.save()
//       .then(()=>{
//         res.json('successful')
//       })
//       .catch(err=>{
//         res.status(400).json('Error:'+err)
//       });
//   }
//   catch {
//     res.josn('something went wrong,Please try again.')
//   }
// })

module.exports = router;