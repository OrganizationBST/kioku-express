const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const debugRouter = require('./routes/debug');

const app = express();

// Set environment to 'development' or 'release'.
// 環境を「development」または「release」に設定する
app.set('env', 'development')

// Initialize all middleware.
// すべてのミドルウェアを初期化する
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Starts indexRouter.
// indexRouterを開始します。
app.use('/', indexRouter);
app.use('/admin', debugRouter);

// Catches 404 and forward to error handler.
// 404をキャッチし、エラーハンドラーに転送します。
app.use(function(req, res, next) {
  next(createError(404));
});

// エラーハンドラ。
app.use(function(err, req, res) {
  // Set locals, only providing errors in development.
  // 開発時にエラーのみを提供するようにローカルを設定します。
  res.locals.message = err.message;
  res.locals.error = app.get('env') === 'development' ? err : {};

  // Render the error page.
  // エラーページを表示します。
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
