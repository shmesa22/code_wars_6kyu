const digital_root = require('./index');

test('should return 7', () => {
  expect(digital_root(16)).toBe(7);
});

test('should return 6', () => {
  expect(digital_root(456)).toBe(6);
});
