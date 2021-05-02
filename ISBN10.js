class ISBN10 {
  constructor(value) {
    if (typeof value !== 'string') {
      throw new Error('Invalid type.')
    }
  }
}

module.exports = ISBN10
