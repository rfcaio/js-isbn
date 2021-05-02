const ISBN10 = require('./ISBN10')

describe('ISBN10', () => {
  test('throws an error if a non string parameter is passed', () => {
    expect(() => new ISBN10(1932698183)).toThrow(Error)
    expect(() => new ISBN10(1932698183)).toThrow('Invalid type.')
  })
})
