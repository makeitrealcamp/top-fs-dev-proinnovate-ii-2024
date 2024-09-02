function compose(...fns) {
    let variable
    const operations = fns
    return function(number){
        variable = number
        while(operations.length > 0){
            variable=operations.pop()(variable)
        }

        return variable
    }
}

const add1 = (x) => x + 1;
const double = (x) => x * 2;
const subtract3 = (x) => x - 3;

const composed = compose(subtract3, double, add1);
console.log(composed(5)); // Output: 9