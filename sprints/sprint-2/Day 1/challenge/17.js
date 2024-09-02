function filterArray(arr, callback) {
    return arr.filter(callback)
}

const numbers = [1, 2, 3, 4, 5];
const evens = filterArray(numbers, x => x % 2 === 0);
console.log(evens); // Output: [2, 4]