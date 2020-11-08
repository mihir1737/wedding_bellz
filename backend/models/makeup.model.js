const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MakeUpSchema = new Schema({
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String },
	img:{type:String}
},{
    collection:'Make up'
});

const MakeUp = mongoose.model('MakeUp', MakeUpSchema);

module.exports = MakeUp;
