function createCounter() {
    // Your implementation here
    let count = 0
    return {
        increment: ()=> {
            count ++
            return count
        },
        reset:()=> count = 0
    }
}

const counter = createCounter();
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
counter.reset();
console.log(counter.increment()); // Output: 1