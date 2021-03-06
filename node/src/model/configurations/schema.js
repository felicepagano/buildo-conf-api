const mongoose = require('mongoose');
const { Schema } = mongoose;

/**
 * Schema class maps to a MongoDB collection and defines the shape of the documents within that collection.
 * A Schema is an object that defines the structure of any documents that will be stored in your
 * MongoDB collection; it enables you to define types and validators for all of your data items.
 * This is the schema for the configuration entity.
 * @link http://mongoosejs.com/docs/guide.html
 * @type {*|Mongoose.Schema}
 */
const configurationSchema = new Schema({
  _id: { type: String, required: true },
  name: { type: String, maxlength: 1024 },
  value: { type: String, maxlength: 1024 }
});
/*
configurationSchema.index({ id: 1, type: -1 });
configurationSchema.set('autoIndex', false);
*/
module.exports =  configurationSchema;
