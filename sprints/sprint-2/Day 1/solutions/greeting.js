const { test, expect } = require('./tester');

/**
 * 
 * @param {string} name 
 * @returns string greeting message
 */
function greetingFunction(name) {
  return `Hello, ${name}!`;
}

test('greetingFunction should return Hello, John!', () => {
  expect(greetingFunction('John')).toBe('Hello, John!');
});

test('greetingFunction should return Hello, Jane!', () => {
  expect(greetingFunction('Jane')).toBe('Hello, Jane!');
});