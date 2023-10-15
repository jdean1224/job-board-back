const Job = require('../models/jobModel');
const catchAsync = require('../utils/catchAsync');
const APIFeatures = require('../utils/apiFeatures');

exports.createJob = catchAsync(async (req, res, next) => {
  const newJob = await Job.create(req.body);

  res.status(201).json({
    status: 'success',
    data: { job: newJob },
  });
});

exports.getAllJobs = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Job.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const jobs = await features.query;

  res.status(200).json({
    status: 'success',
    results: jobs.length,
    data: { jobs },
  });
});
