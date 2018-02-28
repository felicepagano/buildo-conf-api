const mongoose = require('mongoose');

class Facade {
  /**
   * This constructor init a Model.
   * Models are fancy constructors compiled from our Schema definitions.
   * Instances of these models represent documents which can be saved and retrieved from our database.
   * All document creation and retrieval from the database is handled by these models.
   * @param name
   * @param schema
   */
  constructor(name, schema) {
    this.model = mongoose.model(name, schema);
  }

  create(body) {
    const model = new this.model(body);
    return model.save();
  }

  findById(...args) {
    return this.model
      .findById(...args)
      .exec();
  }

  update(...args) {
    return this.model
      .update(...args)
      .exec();
  }

  remove(...args) {
    return this.model
      .remove(...args)
      .exec();
  }
}

module.exports = Facade;
