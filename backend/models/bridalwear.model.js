const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BridalWearSchema = new Schema({
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String },
	img:{type:String}
},{
    collection:'Bridal Wear'
});

const BridalWear = mongoose.model('BridalWear', BridalWearSchema);

module.exports = BridalWear;
