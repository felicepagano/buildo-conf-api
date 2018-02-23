const Router = require('express').Router;
const router = new Router();

/**
 * Configuration module router.
 */
const configuration = require('./model/configuration/router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to buildo API!' });
});

router.use('/configuration', configuration);

module.exports = router;
