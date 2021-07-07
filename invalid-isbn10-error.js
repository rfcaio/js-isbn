class InvalidIsbn10Error extends Error {
  constructor(...params) {
    super(...params)
    this.name = 'InvalidIsbn10Error'
  }
}

module.exports = InvalidIsbn10Error
