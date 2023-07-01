const mongoose = require('mongoose');

const BatchSchema = new mongoose.Schema({
    name:
    {
        type: String,
    },
    mentor:{
        type: mongoose.Types.ObjectId,
        ref:'Mentor',
        required: true
    },
    mentee:{
        type: mongoose.Types.ObjectId,
        ref:'Mentee',
        required: true
    },
    
    modules: [{
        type: mongoose.Types.ObjectId,
        ref: "Module"
    }]
    },
    {
        timestamps: true
    });




const BatchModel = mongoose.model("Batch", BatchSchema);
module.exports = BatchModel;