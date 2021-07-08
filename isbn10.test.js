const Isbn10 = require('./isbn10')
const InvalidIsbn10Error = require('./invalid-isbn10-error')

describe('Isbn10', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createIsbn10WithInvalidType = () => new Isbn10(1234567890)

    expect(createIsbn10WithInvalidType).toThrow(InvalidIsbn10Error)
    expect(createIsbn10WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string lower than ten characters is passed', () => {
    const createInvalidIsbn10 = () => new Isbn10('123456789')

    expect(createInvalidIsbn10).toThrow(InvalidIsbn10Error)
    expect(createInvalidIsbn10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string greater than ten characters is passed', () => {
    const createInvalidIsbn10 = () => new Isbn10('0123456789X')

    expect(createInvalidIsbn10).toThrow(InvalidIsbn10Error)
    expect(createInvalidIsbn10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string with a small x at the end is passed', () => {
    const createInvalidIsbn10 = () => new Isbn10('123456789x')

    expect(createInvalidIsbn10).toThrow(InvalidIsbn10Error)
    expect(createInvalidIsbn10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if an invalid ISBN-10 is passed', () => {
    const createInvalidIsbn10 = () => new Isbn10('1932698184')

    expect(createInvalidIsbn10).toThrow(InvalidIsbn10Error)
    expect(createInvalidIsbn10).toThrow('Invalid ISBN-10 code.')
  })

  test('not throws an error if a valid ISBN-10 is passed', () => {
    const createValidIsbn10 = () => new Isbn10('1932698183')
    expect(createValidIsbn10).not.toThrow(InvalidIsbn10Error)

    const createValidIsbn10WithCapitalXAtEnd = () => new Isbn10('855080603X')
    expect(createValidIsbn10WithCapitalXAtEnd).not.toThrow(InvalidIsbn10Error)
  })

  test('returns ISBN-10 instance value at string conversion', () => {
    const isbn = new Isbn10('1932698183')
    expect(String(isbn)).toEqual('1932698183')
  })

  describe('format', () => {
    test('formats an ISBN-10 value instance', () => {
      const isbn = new Isbn10('855080603X')
      expect(isbn.format()).toEqual('85-508-0603-X')
    })
  })

  describe('value', () => {
    test('returns an ISBN-10 value instance', () => {
      const isbn = new Isbn10('1932698183')
      expect(isbn.value).toEqual('1932698183')
    })
  })
})
