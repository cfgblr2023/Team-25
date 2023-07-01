const mongoose = require('mongoose');


const moduleSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String},
  Session: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true }],
  progress: {
    type: Boolean,
    default: 0
  }
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
