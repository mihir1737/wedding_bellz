const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String },
	img:{type:String}
},{
    collection:'Destination'
});

const Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;