function sumArray(arr) {
    /* Condicion de parada */
    if (arr.length===0){
        return 0
    }
    return arr[0] + sumArray(arr.slice(1))
}

console.log(sumArray([1, 2, 3, 4])); // Output: 10
console.log(sumArray([5, 10, 15])); // Output: 30