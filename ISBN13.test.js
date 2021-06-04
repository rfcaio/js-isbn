const ISBN13 = require('./ISBN13')
const InvalidISBN13Error = require('./InvalidISBN13Error')

describe('ISBN13', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN13WithInvalidType = () => new ISBN13(9788550804606)

    expect(createISBN13WithInvalidType).toThrow(InvalidISBN13Error)
    expect(createISBN13WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string lower than thirteen characters is passed', () => {
    const createInvalidISBN13 = () => new ISBN13('978855080460')

    expect(createInvalidISBN13).toThrow(InvalidISBN13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 format.')
  })

  test('throws an error if a string greater than thirteen characters is passed', () => {
    const createInvalidISBN13 = () => new ISBN13('97885508046060')

    expect(createInvalidISBN13).toThrow(InvalidISBN13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 format.')
  })

  test('throws an error if an invalid ISBN-13 is passed', () => {
    const createInvalidISBN13 = () => new ISBN13('9788550804600')

    expect(createInvalidISBN13).toThrow(InvalidISBN13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 code.')
  })

  test('not throws an error if a valid ISBN-13 is passed', () => {
    const createValidISBN13 = () => new ISBN13('9788550804606')
    expect(createValidISBN13).not.toThrow(InvalidISBN13Error)

    const createValidISBN13WithZeroAsVerifyDigit = () =>
      new ISBN13('9788576059240')
    expect(createValidISBN13WithZeroAsVerifyDigit).not.toThrow(
      InvalidISBN13Error
    )
  })
})
