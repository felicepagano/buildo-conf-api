const chai = require('chai');
const chaiHttp = require('chai-http');
/*
 * We defined should by running chai.should() to style our tests on the HTTP requests result,
 * then we told chai to use chai HTTP.
 */
const should = chai.should();

chai.use(chaiHttp);

describe('API call', () => {

  it('it should GET all the configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .get('/configurations')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

  it('it should POST a new configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .post('/configurations')
      .set('content-type', 'application/json')
      .send({ _id: 'test', name: 'test', value: 'test' })
      .end((err, res) => {
        res.should.have.status(201);
        done();
      });
  });

  it('it should POST an existing configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .post('/configurations')
      .set('content-type', 'application/json')
      .send({ _id: 'test', name: 'test', value: 'test' })
      .end((err, res) => {
        res.should.have.status(409);
        done();
      });
  });

  it('it should GET an existing configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .get('/configurations/test')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should DELETE an existing configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .delete('/configurations/test')
      .end((err, res) => {
        res.should.have.status(204);
        done();
      });
  });

  it('it should GET all the configurations', (done) => {
    /*
    Integration env
     */
    chai.request('http://188.166.89.24:8080')
      .get('/configurations')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });

});
