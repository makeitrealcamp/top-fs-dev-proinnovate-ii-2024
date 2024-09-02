const module = (function() {
    letVariable = 0
    return {
        getVar: ()=> letVariable,
        setVar:(value) => {
            letVariable = value
        }
    }
})();

console.log(module.getVar()); // Output: 0
module.setVar(42);
console.log(module.getVar());
console.log(module.getVar()); // Output: 42 