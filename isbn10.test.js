const ISBN10 = require('./isbn10')
const InvalidISBN10Error = require('./invalid-isbn10-error')

describe('ISBN10', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN10WithInvalidType = () => new ISBN10(1234567890)

    expect(createISBN10WithInvalidType).toThrow(InvalidISBN10Error)
    expect(createISBN10WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string lower than ten characters is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('123456789')

    expect(createInvalidISBN10).toThrow(InvalidISBN10Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string greater than ten characters is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('0123456789X')

    expect(createInvalidISBN10).toThrow(InvalidISBN10Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string with a small x at the end is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('123456789x')

    expect(createInvalidISBN10).toThrow(InvalidISBN10Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if an invalid ISBN-10 is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('1932698184')

    expect(createInvalidISBN10).toThrow(InvalidISBN10Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 code.')
  })

  test('not throws an error if a valid ISBN-10 is passed', () => {
    const createValidISBN10 = () => new ISBN10('1932698183')
    expect(createValidISBN10).not.toThrow(InvalidISBN10Error)

    const createValidISBN10WithCapitalXAtEnd = () => new ISBN10('855080603X')
    expect(createValidISBN10WithCapitalXAtEnd).not.toThrow(InvalidISBN10Error)
  })

  test('returns ISBN-10 instance value at string conversion', () => {
    const isbn = new ISBN10('1932698183')
    expect(String(isbn)).toEqual('1932698183')
  })

  describe('format', () => {
    test('formats an ISBN-10 value instance', () => {
      const isbn = new ISBN10('855080603X')
      expect(isbn.format()).toEqual('85-508-0603-X')
    })
  })

  describe('value', () => {
    test('returns an ISBN-10 value instance', () => {
      const isbn = new ISBN10('1932698183')
      expect(isbn.value).toEqual('1932698183')
    })
  })
})
