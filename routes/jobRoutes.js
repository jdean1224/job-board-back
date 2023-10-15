const express = require('express');
const jobController = require('../controllers/jobController');

const jobRouter = express.Router();

jobRouter
  .route('/')
  .get(jobController.getAllJobs)
  .post(jobController.createJob);

module.exports = jobRouter;
