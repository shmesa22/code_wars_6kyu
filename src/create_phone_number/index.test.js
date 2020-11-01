const createPhoneNumber = require('.');

describe('Create phone number', () => {
  it('should format numbers correctly', () => {
    expect(createPhoneNumber([1,2,3,4,5,6,7,8,9,0])).toBe('(123) 456-7890')
  })
})
