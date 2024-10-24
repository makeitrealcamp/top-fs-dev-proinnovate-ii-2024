const { test, expect } = require('./tester');
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns number sum of a and b
 */
function sum(a, b) {
  return a + b;
}

/**testing sum function */
// Test cases
test('sum of 1 and 2 should be 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sum of -1 and 1 should be 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('sum of 0 and 0 should be 0', () => {
  expect(sum(0, 0)).toBe(0);
});

test('sum of 10 and 20 should be 30', () => {
  expect(sum(10, 20)).toBe(30);
});

test('sum of 1.5 and 2.5 should be 4', () => {
  expect(sum(1.5, 2.5)).toBe(4);
});