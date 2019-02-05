const isValidWalk = require('./index');

describe('Take a Ten Minute Walk', () => {
  test('should return true', () => {
    expect(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])).toBe(true);
  });

  test('should return false', () => {
    expect(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])).toBe(false);
  });

  test('should return false', () => {
    expect(isValidWalk(['w'])).toBe(false);
  });

  test('should return false', () => {
    expect(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])).toBe(false);
  });
});
