const VALID_ISBN10_FORMAT = /^\d{9}[0-9X]$/

class ISBN10 {
  constructor(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid type.')
    }

    if (!VALID_ISBN10_FORMAT.test(value)) {
      throw new Error('Invalid ISBN-10 format.')
    }
  }
}

module.exports = ISBN10
