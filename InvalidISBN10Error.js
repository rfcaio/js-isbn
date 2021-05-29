class InvalidISBN10Error extends Error {
  constructor(...params) {
    super(...params)
    this.name = 'InvalidISBN10Error'
  }
}

module.exports = InvalidISBN10Error
