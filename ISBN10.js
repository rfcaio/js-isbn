const VALID_ISBN10_FORMAT = /^\d{9}[0-9X]$/

class ISBN10 {
  constructor(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid type.')
    }

    if (!VALID_ISBN10_FORMAT.test(value)) {
      throw new Error('Invalid ISBN-10 format.')
    }

    if (this._getISBN10Checksum(value) % 11 !== 0) {
      throw new Error('Invalid ISBN-10 code.')
    }
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
}

module.exports = ISBN10
