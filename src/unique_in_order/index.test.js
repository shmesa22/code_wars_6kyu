const uniqueInOrder = require('.');

describe('Unique in order', () => {
  it('should not repeat consecutive values', () => {
    expect(
      uniqueInOrder(['a', 'a', 'b', 'b', 'a', 'a', 'c', 'c'])
    ).toMatchObject(['a', 'b', 'a', 'c'])
  })
})
