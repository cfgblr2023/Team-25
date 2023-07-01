const mongoose = require('mongoose');


const moduleSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String},
  Session: { type: mongoose.Schema.Types.ObjectId, ref: 'Session', required: true }
});

const Module = mongoose.model('Module', moduleSchema);

module.exports = Module;
