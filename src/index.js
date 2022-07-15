const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const { errorFound, errorStatus } = require('./middleware');

const app = express();

mongoose.connect(process.env.DATABASE_URL);

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN,
}));

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World',
  });
});

app.use(errorFound);

app.use(errorStatus);

const port = process.env.PORT || 1337;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening at http://localhost:${port}`);
});
