const Router = require('express').Router;
const router = new Router();

/**
 * Configuration module router.
 */
const configurations = require('./model/configurations/router');

router.use('/configurations', configurations);

module.exports = router;
