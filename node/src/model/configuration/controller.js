const Controller = require('../../lib/controller');
const configurationFacade = require('./facade');

class ConfigurationController extends Controller {}

module.exports = new ConfigurationController(configurationFacade);
