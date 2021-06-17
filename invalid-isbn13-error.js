class InvalidISBN13Error extends Error {
  constructor(...params) {
    super(...params)
    this.name = 'InvalidISBN13Error'
  }
}

module.exports = InvalidISBN13Error
