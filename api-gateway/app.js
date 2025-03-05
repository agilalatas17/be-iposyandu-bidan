require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/usersRoute');
const ibuHamilRouter = require('./routes/ibuHamilRoute');
const refreshTokenRouter = require('./routes/refreshTokenRoute');

const app = express();
app.use(
  cors({
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(ibuHamilRouter);
app.use(usersRouter);
app.use(refreshTokenRouter);

module.exports = app;
