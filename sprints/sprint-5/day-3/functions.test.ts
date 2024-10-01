import { sum, subtract, multiply } from './functions';

describe.skip('functions', () => {
  test('sum two numbers', () => {
    expect(sum(3, 7)).toBe(10);
  });

  test('subtract two numbers', () => {
    expect(subtract(7, 3)).toBe(4);
  });

  test('multiply two numbers', () => {
    expect(multiply(7, 3)).toBe(21);
  });
});

describe.skip('test matchers', () => {
  it('should be equal', () => {
    const obj = { name: 'Jest' };
    obj['age'] = 10;
    expect(obj).toEqual({ name: 'Jest', age: 10 });
  });

  it('should be truthy', () => {
    const obj = { name: 'Jest', age: 10 };
    expect(obj).not.toEqual({ name: 'Jest', age: 10 });
  });
});
