const InvalidISBN13Error = require('./InvalidISBN13Error')

const VALID_ISBN13_FORMAT = /^\d{13}$/

class ISBN13 {
  constructor(value) {
    if (this._hasInvalidType(value)) {
      throw new InvalidISBN13Error('Invalid type.')
    }

    if (this._hasInvalidFormat(value)) {
      throw new InvalidISBN13Error('Invalid ISBN-13 format.')
    }
  }

  _hasInvalidType(value) {
    return typeof value !== 'string'
  }

  _hasInvalidFormat(value) {
    return !VALID_ISBN13_FORMAT.test(value)
  }
}

module.exports = ISBN13
