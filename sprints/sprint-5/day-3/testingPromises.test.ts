import { fetchData } from './testingPromises';

describe.only('fetchData', () => {
  test('fetchData  should reject if argument is not a number', () => {
    return expect(fetchData('1')).rejects.toMatch('expected a number');
  });

  test("fetchData should resolve with 'fetchData' after 1 second", () => {
    return expect(fetchData(1)).resolves.toBe('fetchData');
  });

  test('fetchData should reject with expected message in promise', () => {
    const result = fetchData('1');
    result
      .then((result) => {
        expect(result).toBe('fetchData');
      })
      .catch((error) => {
        expect(error).toBe('expected a number');
      });
  });
  test('fetchData should resolve with expected message in promise', () => {
    const result = fetchData(2);
    result
      .then((result) => {
        expect(result).toBe('fetchData');
      })
      .catch((error) => {
        expect(error).not.toBe('expected a number');
      });
  });
  test('fetchData should reject with expected message in async/await', async () => {
    try {
      const result = await fetchData('1');
      console.log({ result });
      expect(result).not.toBe('fetchData');
    } catch (error) {
      expect(error).toBe('expected a number');
    }
  });
  test('fetchData should resolve with expected message in async/await', async () => {
    try {
      const result = await fetchData(1);
      console.log({ result });
      expect(result).toBe('fetchData');
    } catch (error) {
      expect(error).not.toBe('expected a number');
    }
  });
});
