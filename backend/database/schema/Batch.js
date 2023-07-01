const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    name:
    {
        type: String,
    },
    mentor:{
        type: mongoose.Types.ObjectId,
        ref:'mentors',
        required: true
    },
    mentee:{
        type: mongoose.Types.ObjectId,
        ref:'mentees',
        required: true
    },
    
    modules: [{
        type: mongoose.Types.ObjectId,
        ref: "modules"
    }]
    },
    {
        timestamps: true
    });




const BatchModel = mongoose.model("Batch", BatchSchema);
module.exports = BatchModel;