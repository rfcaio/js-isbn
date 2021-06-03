class ISBN13 {
  constructor(value) {
    if (this._hasInvalidType(value)) {
      throw Error('Invalid type.')
    }
  }

  _hasInvalidType(value) {
    return typeof value !== 'string'
  }
}

module.exports = ISBN13
