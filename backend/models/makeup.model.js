const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MakeUpSchema = new Schema({
    Category_id: { type: String },
    Type_id: { type: String },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Address: { type: String }
},{
    collection:'Make Up'
});

const MakeUp = mongoose.model('MakeUp', MakeUpSchema);

module.exports = MakeUp;
