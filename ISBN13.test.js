const ISBN13 = require('./ISBN13')
const InvalidISBN13Error = require('./InvalidISBN13Error')

describe('ISBN13', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN13WithInvalidType = () => new ISBN13(9788550804606)

    expect(createISBN13WithInvalidType).toThrow(InvalidISBN13Error)
    expect(createISBN13WithInvalidType).toThrow('Invalid type.')
  })
})
