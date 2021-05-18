const ISBN10 = require('./ISBN10')

describe('ISBN10', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN10WithInvalidType = () => new ISBN10(1234567890)

    expect(createISBN10WithInvalidType).toThrow(Error)
    expect(createISBN10WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string lower than ten characters is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('123456789')

    expect(createInvalidISBN10).toThrow(Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string greater than ten characters is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('0123456789X')

    expect(createInvalidISBN10).toThrow(Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if a string with a small x at the end is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('123456789x')

    expect(createInvalidISBN10).toThrow(Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if an invalid ISBN-10 is passed', () => {
    const createInvalidISBN10 = () => new ISBN10('1932698184')

    expect(createInvalidISBN10).toThrow(Error)
    expect(createInvalidISBN10).toThrow('Invalid ISBN-10 code.')

    const createValidISBN10 = () => new ISBN10('1932698183')
    expect(createValidISBN10).not.toThrow(Error)

    const createValidISBN10WithFinalX = () => new ISBN10('855080603X')
    expect(createValidISBN10WithFinalX).not.toThrow(Error)
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
