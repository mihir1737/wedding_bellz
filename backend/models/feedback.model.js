const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
    email: {
        type: String,
        required: true,
      },
    date:{type:String},
    rating: {type: Number},
    feedback:{type:String},
	img:{type:String}
},{
    collection:'Feedback'
});

const Feedback = mongoose.model('Feedback', FeedbackSchema);

module.exports =Feedback;
