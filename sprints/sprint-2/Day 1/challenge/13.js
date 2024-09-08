function once(fn) {
    // Your implementation here
    let visited = false
    let output
    return function(message){
        if(!visited){
            visited=true
            output = fn(message)
        }
        return output
    }
    
}

const logOnce = once((msg) => console.log(msg));
logOnce("Hello!"); // Output: Hello!
logOnce("Hello again!"); // No output