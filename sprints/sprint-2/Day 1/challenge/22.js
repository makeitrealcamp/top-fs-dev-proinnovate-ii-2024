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

const add1 = x => x + 1;
const double = x => x * 2;

const composed = compose(add1, double);
console.log(composed(5)); // Output: 11 (double(5) => 10, add1(10) => 11)