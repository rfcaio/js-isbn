const Isbn13 = require('./isbn13')
const InvalidIsbn13Error = require('./invalid-isbn13-error')

describe('ISBN13', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN13WithInvalidType = () => new Isbn13(9788550804606)

    expect(createISBN13WithInvalidType).toThrow(InvalidIsbn13Error)
    expect(createISBN13WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string lower than thirteen characters is passed', () => {
    const createInvalidISBN13 = () => new Isbn13('978855080460')

    expect(createInvalidISBN13).toThrow(InvalidIsbn13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 format.')
  })

  test('throws an error if a string greater than thirteen characters is passed', () => {
    const createInvalidISBN13 = () => new Isbn13('97885508046060')

    expect(createInvalidISBN13).toThrow(InvalidIsbn13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 format.')
  })

  test('throws an error if an invalid ISBN-13 is passed', () => {
    const createInvalidISBN13 = () => new Isbn13('9788550804600')

    expect(createInvalidISBN13).toThrow(InvalidIsbn13Error)
    expect(createInvalidISBN13).toThrow('Invalid ISBN-13 code.')
  })

  test('not throws an error if a valid ISBN-13 is passed', () => {
    const createValidISBN13 = () => new Isbn13('9788550804606')
    expect(createValidISBN13).not.toThrow(InvalidIsbn13Error)

    const createValidISBN13WithZeroAsVerifyDigit = () =>
      new Isbn13('9788576059240')
    expect(createValidISBN13WithZeroAsVerifyDigit).not.toThrow(
      InvalidIsbn13Error
    )
  })

  test('returns ISBN-13 instance value at string conversion', () => {
    const isbn = new Isbn13('9788576059240')
    expect(String(isbn)).toEqual('9788576059240')
  })

  describe('format', () => {
    test('formats an ISBN-13 value instance', () => {
      const isbn = new Isbn13('9788576059240')
      expect(isbn.format()).toEqual('978-85-760-5924-0')
    })
  })

  describe('value', () => {
    test('returns an ISBN-13 value instance', () => {
      const isbn = new Isbn13('9788550804606')
      expect(isbn.value).toEqual('9788550804606')
    })
  })
})
