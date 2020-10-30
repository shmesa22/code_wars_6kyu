const countBits = require('.');

describe('Bit counting', () => {
  it('should cast a number to bits and count ones', () => {
    expect(countBits(0)).toBe(0)
    expect(countBits(4)).toBe(1)
    expect(countBits(7)).toBe(3)
    expect(countBits(9)).toBe(2)
  })
})
