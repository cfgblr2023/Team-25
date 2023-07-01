const mongoose = require('mongoose');
const ResourcesSchema = new mongoose.Schema({
    link:
    {
        type: String,
        required:true
    },
    module: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Module'
      }
    },
    {
        timestamps: true
    });

const ResourcesModel = mongoose.model("Resource", ResourcesSchema);
module.exports = ResourcesModel;