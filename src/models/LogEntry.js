const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true,
};

const logEntrySchema = new Schema({
  title: requiredString,
  description: String,
  body: String,
  comment: String,
  rating: {
    type: Number,
    min: [0, 'Must be minimun 0'],
    max: [10, 'Must be maximun 10'],
    default: 0,
  },
  image: String,
  latitude: Number,
  longitude: Number,
  visitDate: {
    type: Date,
    require: true,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);

module.exports = {
  logEntrySchema,
  LogEntry,
};
