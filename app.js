let express = require('express');
const cors = require('cors')
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const DB_URI = /* process.env.SCALINGO_MONGO_URL  ||*/ "mongodb://localhost:27017/projet"
mongoose.connect(DB_URI).then(() => console.log('DB OK'))

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
/* app.use(express.static(path.join(__dirname, 'public'))); */

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
