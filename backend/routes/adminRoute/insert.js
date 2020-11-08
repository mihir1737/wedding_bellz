const express = require('express')
const app = express()
const router = require('express').Router();
const mongoose = require('mongoose')
let BridalWear = require('../../models/bridalwear.model')
let GroomWear = require('../../models/groomwear.model')
let Destination = require('../../models/destination.model')
let MakeUp = require('../../models/makeup.model')
let PhotoGrapher = require('../../models/photographer.model')

app.use(express.json())

var multer = require('multer')
var fs = require('fs');
var path = require('path');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './images/services')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})
const fileFilter = (req, file, cb) => {
    if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/jpg' || file.mimetype == 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}
var upload = multer({ storage: storage, fileFilter: fileFilter }).single('file')

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
            let item = JSON.parse(req.body.item)
            console.log(item)
            if (user.usertype !== 'admin')
                return res.sendstatus(401)
            else {
                try {
                    const obj = {
                        Name: item.name,
                        City: item.city,
                        Description: item.description,
                        Contact: item.contact,
                        Price: item.price,
                        img: '/services/' + req.file.filename,
                    }
                    console.log(obj)
                        switch (item.service) {
                            case "bridalwear":
                                console.log('bridalwear create.')
                                BridalWear.create(obj, (err, item) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(400).json('Error:' + err)
                                    }
                                    else {
                                        res.status(200)
                                        res.json('successful')
                                    }
                                })
                                break;
                            case "groomwear":
                                GroomWear.create(obj, (err, item) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(400).json('Error:' + err)
                                    }
                                    else {
                                        res.status(200)
                                        res.json('successful')
                                    }
                                })
                                break;
                            case "makeup":
                                MakeUp.create(obj, (err, item) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(400).json('Error:' + err)
                                    }
                                    else {
                                        res.status(200)
                                        res.json('successful')
                                    }
                                })
                                break;
                            case "venue":
                                Destination.create(obj, (err, item) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(400).json('Error:' + err)
                                    }
                                    else {
                                        res.status(200)
                                        res.json('successful')
                                    }
                                })
                                break;
                            case "photographer":
                                console.log('photographer......')
                                PhotoGrapher.create(obj, (err, item) => {
                                    if (err) {
                                        console.log(err);
                                        res.status(400).json('Error:' + err)
                                    }
                                    else {
                                        res.status(200)
                                        res.json('successful')
                                    }
                                })
                                break;
                            default:
                                console.log('default')
                            // code block
                        }
                }
                catch {
                    res.status(500)
                    res.json('something went wrong,Please try again.')
                }

                console.log('done')
            }
        }
        )
    }
)
module.exports = router;