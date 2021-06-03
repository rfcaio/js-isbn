const InvalidISBN13Error = require('./InvalidISBN13Error')

class ISBN13 {
  constructor(value) {
    if (this._hasInvalidType(value)) {
      throw new InvalidISBN13Error('Invalid type.')
    }
  }

  _hasInvalidType(value) {
    return typeof value !== 'string'
  }
}

module.exports = ISBN13
