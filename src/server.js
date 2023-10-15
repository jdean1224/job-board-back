const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './src/config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

const PORT = 5850;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
});
