const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true, 
    unique: true,
    dropDups: true,
    trim: true
  },
  name: {type:String},
  city: {type:String},
  gender: {type:String},
  password: {type:String},
  usertype: {type:String}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
