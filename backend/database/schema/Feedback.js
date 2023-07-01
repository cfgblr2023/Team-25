const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    description:
    {
        type: String,
    },
    
    mentee:{
        type: mongoose.Types.ObjectId,
        ref:'mentees',
        required: true
    },
    
    modules: {
        type: mongoose.Types.ObjectId,
        ref: "module"
    }
    },
    {
        timestamps: true
    });




const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);
module.exports = FeedbackModel;