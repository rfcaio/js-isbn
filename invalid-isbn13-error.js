class InvalidIsbn13Error extends Error {
  constructor(...params) {
    super(...params)
    this.name = 'InvalidIsbn13Error'
  }
}

module.exports = InvalidIsbn13Error
