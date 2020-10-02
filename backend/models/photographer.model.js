const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const photographerSchema = new Schema({
    Category_id: { type: String },
    Type_id: { type: String },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Address: { type: String }
},{
    collection:'Photographer'
});

const Photographer = mongoose.model('photographer', photographerSchema);

module.exports = Photographer;
