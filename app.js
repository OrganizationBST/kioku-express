const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

// Establish connection with mongodb
const MongoClient = require('mongodb').MongoClient
console.log(process.env.DB_LINK)
const client = new MongoClient(process.env.DB_LINK, {useNewUrlParser: true, useUnifiedTopology: true})
client.connect(err => {
  if(err) {
    console.log(err)
  }
  else {
    const collection = client.db("test").collection("devices");
    console.log(collection)
    client.close();
  }
});

// Set environment to 'development' or 'release'.
app.set('env', 'development')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
