const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    email: {
        type: String,
        required: true,
      },
    Name: { type: String },
    City: { type: String },
    Contact: { type: String },
    Price: { type: String },
    Description: { type: String }
},{
    collection:'Cart'
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports =Cart;
