/**
 * Configuration environment class.
 * This class represents the application config and provides default values.
 * Configuration are loaded using the global object process.
 * @type {{environment: *|string, server: {port: *|number}, mongo: {url: *|string}}}
 */
const config = {
  /**
   * Environment type
   */
  environment: process.env.NODE_ENV || 'dev',

  /**
   * Server configuration
   */
  server: {
    /**
     * Server listening port, 8080 if not defined.
     */
    port: process.env.PORT || 8080
  },

  /**
   * MongoDb Configuration
   */
  mongo: {
    /**
     * MongoDb Connection URL. mongodb://localhost/buildo if not defined.
     */
    url: process.env.MONGO_DB_URI || 'mongodb://localhost/buildo'
  }
};

module.exports = config;
