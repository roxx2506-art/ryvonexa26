const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['technical', 'non-technical'],
    required: true
  },
  tagline: String,
  shortDesc: {
    type: String,
    required: true
  },
  fullDesc: String,
  rules: [String],
  prizePool: String,
  teamSize: String,
  time: String,
  venue: String,
  icon: String,
  coordinators: [{
    name: String,
    phone: String,
    email: String
  }]
});

module.exports = mongoose.model('Event', eventSchema);
