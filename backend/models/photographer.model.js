const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PhotoGrapherSchema = new Schema({
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String },
	img:{type:String}
},{
    collection:'PhotoGrapher'
});

const PhotoGrapher = mongoose.model('PhotoGrapher', PhotoGrapherSchema);

module.exports = PhotoGrapher;
