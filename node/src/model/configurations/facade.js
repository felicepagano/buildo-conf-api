const Facade = require('../../lib/facade');
const configurationSchema = require('./schema');

class ConfigurationFacade extends Facade {}

/*
 * The first argument is the singular name of the collection your model is for.
 * Mongoose automatically looks for the plural version of your model name.
 */
module.exports = new ConfigurationFacade('Configuration', configurationSchema);
