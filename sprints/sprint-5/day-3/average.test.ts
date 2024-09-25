import { average } from './average';

describe.only('average function', () => {
  it('should exists', () => {
    expect(average).toBeDefined();
  });

  it('should receive and array of numbers as argument', () => {
    expect(() => average(1)).toThrow('Invalid argument');
  });

  it('should return null if array is empty', () => {
    expect(average([])).toBeNull();
  });

  it('should return the average of the numbers', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
  });

  it('should return the average of the numbers', () => {
    expect(average([1, 2])).not.toBe(2.5);
  });
});

// FizzBuzz test
// pass 2 numbers as arguments, start and end
/*print numbers from start to end, but here’s the catch,
 multiple of three should print “Fizz” and similarly 
 print “Buzz”  for multiples of 5 
 and lastly print “FizzBuzz” for multiples of three and five. */
