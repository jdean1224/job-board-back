const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A job must hav a title'],
  },
  companyName: {
    type: String,
    required: [true, 'A job must have a company name'],
  },
  city: {
    type: String,
    required: [true, 'A job must have a city'],
  },
  state: {
    type: String,
    required: [true, 'A job must have a state'],
  },
  hours: {
    type: String,
    required: true,
    enum: ['Full-time', 'Part-time'],
  },
  site: {
    type: String,
    required: true,
    enum: ['On-site', 'Remote', 'Hybrid remote'],
  },
  companyOverview: {
    type: String,
  },
  duties: {
    type: String,
  },
  skills: {
    type: String,
  },
});

const Job = mongoose.model('Job', JobSchema);

module.exports = Job;
