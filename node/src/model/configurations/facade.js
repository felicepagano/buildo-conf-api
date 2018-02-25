const Facade = require('../../lib/facade');
const configurationSchema = require('./schema');

class ConfigurationFacade extends Facade {}

// create a facade to a new model named Configuration with configuration schema
module.exports = new ConfigurationFacade('Configuration', configurationSchema);
