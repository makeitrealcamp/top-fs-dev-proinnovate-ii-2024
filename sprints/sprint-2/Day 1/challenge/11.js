function memoize(fn) {
    const valueCalculated = {}
    return function(value){
        if( value in valueCalculated) return valueCalculated[value]
        const output=fn(value)
        valueCalculated.value = output
        return output
    }
}

const slowSquare = (n) => { 
    for(let i = 0; i < 1000000000; i++) {} // Simulate slow computation
    return n * n;
};
const fastSquare = memoize(slowSquare);
console.log(fastSquare(5)); // Slow on first call
console.log(fastSquare(5)); // Fast on second call