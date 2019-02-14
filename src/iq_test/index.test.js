const iqTest = require('./index');

describe('IQ test', () => {
  test('should return 3', () => {
    expect(iqTest("2 4 7 8 10")).toBe(3);
  });

  test('should return 1', () => {
    expect(iqTest("1 2 2")).toBe(1);
  });

  test('should return 4', () => {
    expect(iqTest("1 1 1 2")).toBe(4);
  });
});
