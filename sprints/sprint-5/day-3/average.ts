export const average = (a: number[]) => {
  if (!Array.isArray(a)) {
    throw new Error('Invalid argument');
  }
  if (a.length === 0) {
    return null;
  }
  return a.reduce((acc, item) => acc + item, 0) / a.length;
};
