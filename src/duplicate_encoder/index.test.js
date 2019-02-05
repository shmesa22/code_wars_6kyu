const duplicateEncode = require('./index');

describe('Duplicate Encoder', () => {
  test('should return (((', () => {
    expect(duplicateEncode("din")).toBe("(((");
  });

  test('should return ()()()', () => {
    expect(duplicateEncode("recede")).toBe("()()()");
  });

  test('should return )())())', () => {
    expect(duplicateEncode("Success")).toBe(")())())");
  });

  test('should return ))((', () => {
    expect(duplicateEncode("(( @")).toBe("))((");
  });

  test('should return ', () => {
    expect(duplicateEncode("RnzbI)eleeuH@y!eee")).toBe("(((((()())((((()))");
  });
});
