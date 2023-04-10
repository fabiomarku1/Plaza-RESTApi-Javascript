const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const { errorHandler } = require('../src/errors/errorHandler');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/users', userRoutes);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
