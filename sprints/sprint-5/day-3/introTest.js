const sum = (a, b) => a + b;
const subtract = (a, b) => a + b;
const multiply = (a, b) => a * b;

test('sum adds numbers', () => {
  const sumResult = sum(3, 7);
  const sumExpected = 10;
  expected(sumResult).toBe(sumExpected);
});

test('subtract subtracts numbers', () => {
  const resultSubtract = subtract(7, 3);
  const expectedSubtract = 4;
  expected(resultSubtract).toBe(expectedSubtract);
});

test('multiply multiplies numbers', () => {
  const resultMultiply = multiply(7, 3);
  const expectedMultiply = 21;
  expected(resultMultiply).toBe(expectedMultiply);
});

/**
 *
 * first approach to test 
if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`);
}
*/

/**
 * expected - toBe //matcher

*/
function expected(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },

    notBe(expected) {
      if (actual === expected) {
        throw new Error(`${actual} is equal to ${expected}`);
      }
    },

    isEqual(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}
