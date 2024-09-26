import { average } from './average';

describe.skip('average function', () => {
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
