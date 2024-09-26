export function fetchData(num: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (typeof num !== 'number') {
      setTimeout(() => {
        reject('expected a number');
      }, 1000);
    }
    setTimeout(() => {
      resolve('fetchData');
    }, 1000);
  });
}
