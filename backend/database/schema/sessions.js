const mongoose = require('mongoose');
const SessionsSchema = new mongoose.Schema({
    link:
    {
        type: String,
        required:true
    },
    start_date:
    {
        type: Date
    },
    end_date:
    {
        type: Date
    }
    },
    {
        timestamps: true
    });

const SessionsModel = mongoose.model("Session", SessionsSchema);
module.exports = SessionsModel;