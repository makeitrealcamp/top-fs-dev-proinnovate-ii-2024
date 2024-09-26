// FizzBuzz test
// pass 2 numbers as arguments, start and end
/*print numbers from start to end, but here’s the catch,
 multiple of three should print “Fizz” and similarly 
 print “Buzz”  for multiples of 5 
 and lastly print “FizzBuzz” for multiples of three and five. */
import { fizzBuzz, showFizzBuzz } from './fizzBuzz';

describe.skip('fizzBuzz function', () => {
  it('should  exists fizzBuzz', () => {
    expect(fizzBuzz).toBeDefined();
  });

  test('the argument is a number', () => {
    expect(fizzBuzz('1')).toEqual(null);
  });

  test('the argument is a number', () => {
    expect(fizzBuzz(1)).not.toEqual(null);
  });

  it('should return Fizz for multiples of 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });
  it('should return Buzz for multiples of 3', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });
  it('should return “FizzBuzz” for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return the number for non-multiples of 3 and 5', () => {
    expect(fizzBuzz(4)).toBe(4);
  });
});

describe.skip('showFizzBuzz function', () => {
  it('should  exists showFizzBuzz', () => {
    expect(showFizzBuzz).toBeDefined();
  });

  test('showFizzBuzz  receive 2 numbers as arguments', () => {
    expect(() => showFizzBuzz(1)).toThrow('expected more than one argument');
  });
  test('showFizzBuzz  receive 2 numbers as arguments', () => {
    expect(() => showFizzBuzz(1, 2)).not.toThrow(
      'expected more than one argument'
    );
  });
  test('third argument should be a function', () => {
    expect(() => showFizzBuzz(1, 2, '3')).toThrow('expected a function');
  });

  test('end value should be greater than start value', () => {
    expect(() => showFizzBuzz(2, 1)).toThrow('end value should be greater');
  });

  test('the callback function should be called', () => {
    // mocking function
    const callback = jest.fn();
    const start = 1;
    const end = 3;

    expect(() => showFizzBuzz(start, end, callback)).not.toThrow();
    expect(callback).toHaveBeenCalledTimes(end);
  });

  test('should return the valid result from start to end', () => {
    // expected result from 1 to 15
    const expected = [
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz',
    ];

    const start = 1;
    const end = 15;

    expect(showFizzBuzz(start, end, fizzBuzz)).toEqual(expected);
  });
});
