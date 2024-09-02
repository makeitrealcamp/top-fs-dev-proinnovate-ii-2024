function fibonacci(n) {
    /* Condicion de parada */
    if(n <= 0) return 0
    if (n===1) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(5)); // Output: 5 (0, 1, 1, 2, 3, 5)
console.log(fibonacci(7)); // Output: 13 (0, 1, 1, 2, 3, 5, 8, 13)