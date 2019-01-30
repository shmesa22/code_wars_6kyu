const order = require('./index');

describe('your order please', () => {
  test('should return "Thi1s is2 3a T4est"', () => {
    expect(order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
  });

  test('should return "Fo1r the2 g3ood 4of th5e pe6ople"', () => {
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
  });

  test('should return ""', () => {
    expect(order("")).toBe("");
  });
})
