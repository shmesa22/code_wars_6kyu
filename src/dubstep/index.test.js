var songDecoder = require('./index');

test('should return A B C', () => {
  expect(songDecoder("AWUBBWUBC")).toBe("A B C");
});

test('should return A B C', () => {
  expect(songDecoder("AWUBWUBWUBBWUBWUBWUBC")).toBe("A B C");
});

test('should return A B C', () => {
  expect(songDecoder("WUBAWUBBWUBCWUB")).toBe("A B C");
});
