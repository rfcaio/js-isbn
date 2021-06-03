const ISBN13 = require('./ISBN13')

describe('ISBN13', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN13WithInvalidType = () => new ISBN13(9788550804606)

    expect(createISBN13WithInvalidType).toThrow(Error)
    expect(createISBN13WithInvalidType).toThrow('Invalid type.')
  })
})
