const suspender = <T>(promise: Promise<T>) => {
  let status = 'pending';
  let result: T | Error;
  
  const suspender = promise.then(
    (res) => {
      status = 'success';
      result = res;
    },
    (err) => {
      status = 'error';
      result = err;
    }
  );
  const read = () => {
    switch (status) {
      case 'pending':
        throw suspender;
      case 'error':
        throw result;
      default:
        return result;
    }
  };
  return {
    read,
  };
};

export const fetchData = (url: string) => {
  const promise = fetch(url)
    .then((response) => response.json())
    .then((data) => data);
  return suspender(promise);
};
