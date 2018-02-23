const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * schema maps to a MongoDB collection and defines the shape of the documents within that collection.
 * This is the schema for the configuration entity.
 * @type {*|Mongoose.Schema}
 */
const configurationSchema = new Schema({
  _id: { type: String, required: true },
  id: { type: String, required: true },
  name: { type: String },
  value: { type: String }
});


module.exports =  configurationSchema;
