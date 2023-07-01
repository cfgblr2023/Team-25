const mongoose = require('mongoose');


const moduleSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String},
  session: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true }],
  progress: {
    type: Boolean,
    default: false
  }
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
