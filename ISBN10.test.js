const ISBN10 = require('./ISBN10')

describe('ISBN10', () => {
  test('throws an error if a non string parameter is passed', () => {
    const createISBN10WithInvalidType = () => new ISBN10(1234567890)

    expect(createISBN10WithInvalidType).toThrow(Error)
    expect(createISBN10WithInvalidType).toThrow('Invalid type.')
  })

  test('throws an error if a string with invalid format is passed', () => {
    const createISBN10LessThanTenCharacters = () => new ISBN10('123456789')

    expect(createISBN10LessThanTenCharacters).toThrow(Error)
    expect(createISBN10LessThanTenCharacters).toThrow('Invalid ISBN-10 format.')

    const createISBN10GreaterThanTenCharacters = () => new ISBN10('0123456789X')

    expect(createISBN10GreaterThanTenCharacters).toThrow(Error)
    expect(createISBN10GreaterThanTenCharacters).toThrow(
      'Invalid ISBN-10 format.'
    )

    const createISBN10WithLowerFinalX = () => new ISBN10('123456789x')

    expect(createISBN10WithLowerFinalX).toThrow(Error)
    expect(createISBN10WithLowerFinalX).toThrow('Invalid ISBN-10 format.')
  })

  test('throws an error if an invalid ISBN-10 is passed', () => {
    expect(() => new ISBN10('1932698184')).toThrow(Error)
    expect(() => new ISBN10('1932698184')).toThrow('Invalid ISBN-10 code.')

    expect(() => new ISBN10('1932698183')).not.toThrow(Error)
    expect(() => new ISBN10('855080603X')).not.toThrow(Error)
  })
})
