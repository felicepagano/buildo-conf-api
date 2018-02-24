const Router = require('express').Router;
const router = new Router();

/**
 * Configuration module router.
 */
const configuration = require('./model/configuration/router');

router.use('/configuration', configuration);

module.exports = router;
