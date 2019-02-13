const duplicateCount = require('./index');

describe('Counting duplicates', () => {
  test('should return 0', () => {
    expect(duplicateCount("")).toBe(0);
  });

  test('should return 0', () => {
    expect(duplicateCount("abcde")).toBe(0);
  });

  test('should return 2', () => {
    expect(duplicateCount("aabbcde")).toBe(2);
  });

  test('should return 2', () => {
    expect(duplicateCount("aabBcde")).toBe(2);
  });

  test('should return 1', () => {
    expect(duplicateCount("Indivisibility")).toBe(1);
  });

  test('should return 2', () => {
    expect(duplicateCount("Indivisibilities")).toBe(2);
  });
});
