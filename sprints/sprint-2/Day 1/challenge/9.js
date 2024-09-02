function createSimpleCounter() {
    count= 0
    return function(){
        count++
        return count
    }
}

const counter = createSimpleCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2