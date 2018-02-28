const expect = require('chai').expect;
const mongoose = require('mongoose');

const schema = require('../src/model/configurations/schema');

describe('schema validation', () => {

  it('should be invalid if _id is empty', (done) => {
    const Model = mongoose.model('configuration', schema);
    new Model().validate((err) => {
      expect(err.errors._id).to.exist;
      done();
    });
  });

  it('should be invalid if name has more than 1024 characters', (done) => {
    const k = 'a'.repeat(1025);
    const Model = mongoose.model('configuration', schema);
    new Model({ _id: '1', name: k, description: 'A' }).validate((err) => {
      expect(err.errors.name.kind).to.equals('maxlength');
      done();
    });
  });

  it('should be invalid if description has more than 1024 characters', (done) => {
    const v = 'b'.repeat(1025);
    const Model = mongoose.model('configuration', schema);
    new Model({ _id: '1', name: 'A', value: v }).validate((err) => {
      expect(err.errors.value.kind).to.equals('maxlength');
      done();
    });
  });

});
