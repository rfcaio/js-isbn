const ISBN10 = require('./ISBN10')

describe('ISBN10', () => {
  test('throws an error if a non string parameter is passed', () => {
    expect(() => new ISBN10(1234567890)).toThrow(Error)
    expect(() => new ISBN10(1234567890)).toThrow('Invalid type.')
  })

  test('throws an error if a string with invalid format is passed', () => {
    expect(() => new ISBN10('123456789')).toThrow(Error)
    expect(() => new ISBN10('123456789x')).toThrow('Invalid ISBN-10 format.')
  })
})
