require('dotenv').config();
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let ibuHamilRouter = require('./routes/ibuHamilRoute');
let kunjunganIbuHamilRouter = require('./routes/kunjunganIbuHamil');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(ibuHamilRouter);
app.use('/api/ibu-hamil/kunjungan', kunjunganIbuHamilRouter);

module.exports = app;
