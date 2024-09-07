function sumArray(arr) {
  const v = arr.shift();
  if (v == undefined) return 0;
  return v + sumArray(arr);
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30
