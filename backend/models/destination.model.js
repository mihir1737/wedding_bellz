const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DestinationSchema = new Schema({
    Category_id: { type: String },
    Type_id: { type: String },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price_per_plate: { type: String },
    Address: { type: String }
},{
    collection:'Destination'
});

const Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;