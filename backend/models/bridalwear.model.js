const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BridalWearSchema = new Schema({
    Category_id: { type: String },
    Type_id: { type: String },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Address: { type: String }
},{
    collection:'Bridal Wear'
});

const BridalWear = mongoose.model('BridalWear', BridalWearSchema);

module.exports = BridalWear;
