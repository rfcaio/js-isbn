const InvalidISBN10Error = require('./InvalidISBN10Error')

const ISBN10_DIGIT_GROUPS = /^(\d{2})(\d{3})(\d{4})([0-9X])$/
const VALID_ISBN10_FORMAT = /^\d{9}[0-9X]$/

class ISBN10 {
  constructor(value) {
    if (this._hasInvalidType(value)) {
      throw new InvalidISBN10Error('Invalid type.')
    }

    if (this._hasInvalidFormat(value)) {
      throw new InvalidISBN10Error('Invalid ISBN-10 format.')
    }

    if (this._isISBN10NotValid(value)) {
      throw new InvalidISBN10Error('Invalid ISBN-10 code.')
    }

    this._value = value
  }

  _hasInvalidType(value) {
    return typeof value !== 'string'
  }

  _hasInvalidFormat(value) {
    return !VALID_ISBN10_FORMAT.test(value)
  }

  _isISBN10NotValid(value) {
    return this._getISBN10Checksum(value) % 11 !== 0
  }

  _getISBN10Checksum(value) {
    let result = 0
    for (const index in value) {
      const digitString = value[index]
      const coefficient = 10 - index
      const digit = digitString === 'X' ? 10 : parseInt(digitString, 10)
      result += coefficient * digit
    }
    return result
  }

  format() {
    return this._value.replace(ISBN10_DIGIT_GROUPS, '$1-$2-$3-$4')
  }

  get value() {
    return this._value
  }
}

module.exports = ISBN10
