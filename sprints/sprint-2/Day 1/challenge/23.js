function partial(fn, ...presetArgs) {
    const lenParams = fn.length
    let args =[...presetArgs]
    const returnFunction = (...value)=>{
        args =args.concat(value)
        if(args.length < lenParams) return returnFunction   
        return fn(...args)
    }
    return returnFunction
}

const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);

console.log(add5(10, 15)); // Output: 30