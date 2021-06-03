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

    if (this._isISBN13NotValid(value)) {
      throw new InvalidISBN13Error('Invalid ISBN-13 code.')
    }
  }

  _hasInvalidType(value) {
    return typeof value !== 'string'
  }

  _hasInvalidFormat(value) {
    return !VALID_ISBN13_FORMAT.test(value)
  }

  _isISBN13NotValid(value) {
    const firstTwelveDigits = value.slice(0, 12)
    const valueVerifyDigit = parseInt(value.slice(-1), 10)
    const checksumModTen = this._getISBN13Checksum(firstTwelveDigits) % 10
    const verifyDigit = checksumModTen === 0 ? 0 : 10 - checksumModTen
    return verifyDigit !== valueVerifyDigit
  }

  _getISBN13Checksum(value) {
    let result = 0
    for (const index in value) {
      const digit = parseInt(value[index], 10)
      const coefficient = index % 2 === 0 ? 1 : 3
      result += coefficient * digit
    }
    return result
  }
}

module.exports = ISBN13
