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

  /**
   * Get http request body and use it to create a new entry.
   * It will return the JSON representation of the saved object.
   * @param req
   * @param res
   * @param next
   */
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

  /**
   * Search a document using mongo _id.
   * It will return 404 if nothing is found, otherwise 200.
   * @param req
   * @param res
   * @param next
   * @returns {Promise<any>}
   */
  findById(req, res, next) {
    return this.facade.findById(req.params.id)
      .then((doc) => {
        if (!doc) { return res.sendStatus(HttpStatus.NOT_FOUND); }
        return res.status(HttpStatus.OK).json(doc);
      })
      .catch(err => next(err));
  }

  /**
   * Update a document with the given id.
   * If no document exists with the given id it will returns 404 Not Found.
   * If a document exists but the update is not performed it returns 304 Not Modified.
   * Otherwise it return 204 No Content.
   * @param req
   * @param res
   * @param next
   */
  update(req, res, next) {
    this.facade.update({ _id: req.params.id }, req.body)
      .then((results) => {
        if (Controller.documentsToUpdate(results) < 1) {
          return res.sendStatus(HttpStatus.NOT_FOUND);
        }
        if (Controller.documentsUpdated(results) < 1) {
          return res.sendStatus(HttpStatus.NOT_MODIFIED);
        }
        res.sendStatus(HttpStatus.NO_CONTENT);
      })
      .catch(err => next(err));
  }

  /**
   * Remove an element with the given _id and return HTTP code 204 No Content.
   * If nothing is found return HTTP code 404 Not Found.
   * @param req
   * @param res
   * @param next
   */
  remove(req, res, next) {
    this.facade.remove({ _id: req.params.id })
      .then((doc) => {
        if (doc.n === 0) { return res.sendStatus(HttpStatus.NOT_FOUND); }
        return res.sendStatus(HttpStatus.NO_CONTENT);
      })
      .catch(err => next(err));
  }

  /**
   * Return the number of documents selected for update.
   * @param results
   * @returns {number|*|string}
   */
  static documentsToUpdate(results) {
    return results.n;
  }

  /**
   * Return the number of documents updated.
   * @param results
   * @returns {number}
   */
  static documentsUpdated(results) {
    return results.nModified;
  }
}

module.exports = Controller;
