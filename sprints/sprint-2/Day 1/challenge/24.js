function factorial(n) {
    /* Condicion de parada */
    if(n==0) return 1
    if (n==1) return 1
    return factorial(n-1)*n
}

console.log(factorial(5)); // Output: 120 (5! = 5 * 4 * 3 * 2 * 1)
console.log(factorial(3)); // Output: 6 (3! = 3 * 2 * 1)