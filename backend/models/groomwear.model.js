const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroomeWearSchema = new Schema({
    Category_id: { type: String },
    Type_id: { type: String },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Address: { type: String }
},{
    collection:'Groom Wear'
});

const GroomeWear = mongoose.model('GroomeWear', GroomeWearSchema);

module.exports = GroomeWear;
