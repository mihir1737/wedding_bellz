const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GroomeWearSchema = new Schema({
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String },
	img:{type:String}
},{
    collection:'Groom Wear'
});

const GroomeWear = mongoose.model('GroomeWear', GroomeWearSchema);

module.exports = GroomeWear;
