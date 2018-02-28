/**
 * Fast, unopinionated, minimalist web framework for node.
 * https://github.com/expressjs/express
 * @type {*|createApplication}
 */
const express = require('express');

/**
 * Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
 * https://github.com/Automattic/mongoose
 * @type {*|Mongoose}
 */
const mongoose = require('mongoose');

/**
 * Help secure Express apps with various HTTP headers
 * https://helmetjs.github.io
 * @type {helmet}
 */
const helmet = require('helmet');

/**
 * Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 * https://github.com/expressjs/body-parser
 * @type {Parsers|*}
 */
const bodyParser = require('body-parser');

/**
 * HTTP request logger middleware for node.js
 * https://github.com/expressjs/morgan
 * @type {morgan}
 */
const morgan = require('morgan');

/**
 * http://bluebirdjs.com/docs/why-bluebird.html
 * http://bluebirdjs.com/docs/getting-started.html
 */
const bluebird = require('bluebird');

/**
 * Handle mongoose "ValidationError" and "CastError" as a bad request
 * instead of Internal Server Error.
 * For others errors it will return an Internal Server Error.
 */
const statusHandler = require('statusHandler');

const config = require('./config');
const routes = require('./routes');

const app  = express();

mongoose.Promise = bluebird;
// connect method will create the database if it does not exist.
mongoose.connect(config.mongo.url);

// configure express middleware
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));
app.use('/', routes);

// if you will remove mongoose as dependency this middleware will not be necessary.
app.use((err, req, res, next) => {
  // console.error(err.stack);
  statusHandler(err, res);
});

app.listen(config.server.port, () => {
  console.log(`Magic happens on port ${config.server.port}`);
});

module.exports = app;
