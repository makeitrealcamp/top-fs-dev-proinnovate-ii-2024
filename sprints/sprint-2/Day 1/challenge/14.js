function curry(fn) {
    const lenParams = fn.length
    const args =[]
    const returnFunction = (value)=>{
        args.push(value)
        if(args.length < lenParams) return returnFunction   
        return fn(...args)
    }
    return returnFunction
}

function add(a, b, c) {
    return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6