export function fizzBuzz(n: number): string | null | number {
  if (typeof n !== 'number') return null;

  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n;
}

export function showFizzBuzz(
  start: number,
  end: number,
  callback: (n: number) => void
): number[] | string[] {
  const result = [];
  if (arguments.length < 2) {
    throw new Error('expected more than one argument');
  }
  if (start > end) {
    throw new Error('end value should be greater');
  }

  if (typeof callback !== 'function') {
    throw new Error('expected a function');
  }

  for (let i = start; i <= end; i++) {
    result.push(callback(i));
  }

  return result;
}
