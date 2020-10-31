const arrayDiff = require('.');

describe('Array.diff', () => {
  it('should remove elements included in b', () => {
    expect(arrayDiff([1,2,3], [2])).toMatchObject([1,3])
  })
})
