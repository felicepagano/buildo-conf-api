const HttpStatus = require('http-status-codes');

/**
 * HTTP layer, in this instance you can manage express request, response and next.
 */
class Controller {

  /**
   * This constructor get a facade that will manage interactions with mongo.
   * @param facade
   */
  constructor(facade) {
    this.facade = facade;
  }

  create(req, res, next) {
    this.facade.create(req.body)
      .then(doc => res.status(HttpStatus.CREATED).json(doc))
      .catch(err => next(err));
  }

  find(req, res, next) {
    return this.facade.find(req.query)
      .then(collection => res.status(HttpStatus.OK).json(collection))
      .catch(err => next(err));
  }

  findOne(req, res, next) {
    return this.facade.findOne(req.query)
      .then(doc => res.status(HttpStatus.OK).json(doc))
      .catch(err => next(err));
  }

  findById(req, res, next) {
    return this.facade.findById(req.params.id)
      .then((doc) => {
        if (!doc) { return res.sendStatus(HttpStatus.NOT_FOUND); }
        return res.status(HttpStatus.OK).json(doc);
      })
      .catch(err => next(err));
  }

  update(req, res, next) {
    this.facade.update({ _id: req.params.id }, req.body)
      .then((results) => {
        /*
         * The number of documents selected for update.
         * If the update operation results in no change to the document, e.g. $set expression
         * updates the value to the current value, n can be greater than nModified.
        */
        if (results.n < 1) { return res.sendStatus(HttpStatus.NOT_FOUND); }
        /*
         * The number of documents updated.
         * If the update operation results in no change to the document,
         * such as setting the value of the field to its current value,
         * nModified can be less than n.
         */
        if (results.nModified < 1) { return res.sendStatus(HttpStatus.NOT_MODIFIED); }
        /*
         * The server has successfully fulfilled the request and that there is no additional
         * content to send in the response payload body.
         */
        res.sendStatus(HttpStatus.NO_CONTENT);
      })
      .catch(err => next(err));
  }

  remove(req, res, next) {
    this.facade.remove({ _id: req.params.id })
      .then((doc) => {
        if (!doc) { return res.sendStatus(HttpStatus.NOT_FOUND); }
        return res.sendStatus(HttpStatus.NO_CONTENT);
      })
      .catch(err => next(err));
  }
}

module.exports = Controller;
