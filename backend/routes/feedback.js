const express = require('express')
const app = express()
const router = require('express').Router();
const mongoose = require('mongoose')
let Feedback = require('../models/feedback.model')

app.use(express.json())

var multer = require('multer')
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/feedback')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' ||file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
var upload = multer({ storage: storage,fileFilter:fileFilter }).single('file')

router.route('/').post(
    (req, res) => {
        upload(req, res, function (err) {
            if (err instanceof multer.MulterError) {
                console.log('multer')
                res.status(500).json(err)
                // A Multer error occurred when uploading.
            } else if (err) {
                console.log('err')
                res.status(500).json(err)
                // An unknown error occurred when uploading.
            }
            
            let user = JSON.parse(req.body.user)
            let feedb = JSON.parse(req.body.feedback)
            if (user === null)
                return res.status(401)
            if (user.usertype !== 'enduser')
                return res.status(401)
            else {
                try {
                    var obj = {
                        email: user.email,
                        rating: feedb.rating,
                        feedback: feedb.feedback,
                        date: feedb.date,
                        img: '/feedback/' + req.file.filename,
                    }
                    Feedback.create(obj, (err, item) => {
                        if (err) {
                            console.log(err);
                            res.status(400).json('Error:' + err)
                        }
                        else {
                            res.status(200)
                            res.json('successful')
                        }
                    })
                }
                catch {
                    res.json('something went wrong,Please try again.')
                }
            }
        }
        )
    }
)

module.exports = router;