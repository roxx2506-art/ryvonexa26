const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  regId: {
    type: String,
    required: true,
    unique: true,
    default: () => 'RYV-' + Math.floor(100000 + Math.random() * 900000)
  },
  fullName: {
    type: String,
    required: [true, 'Full name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true
  },
  college: {
    type: String,
    required: [true, 'College name is required'],
    trim: true
  },
  department: {
    type: String,
    required: [true, 'Department is required'],
    default: 'Computer Science & Engineering'
  },
  year: {
    type: String,
    required: [true, 'Year of study is required'],
    enum: ['1st Year', '2nd Year', '3rd Year', '4th Year', 'PG Student']
  },
  selectedEvents: [{
    type: String,
    required: true
  }],
  totalFee: {
    type: Number,
    default: 500
  },
  status: {
    type: String,
    enum: ['Confirmed', 'Pending', 'Cancelled'],
    default: 'Pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Registration', registrationSchema);
