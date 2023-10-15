const express = require('express');
const cors = require('cors');
const app = express();
const jobRouter = require('../routes/jobRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/v1/jobs', jobRouter);

module.exports = app;
