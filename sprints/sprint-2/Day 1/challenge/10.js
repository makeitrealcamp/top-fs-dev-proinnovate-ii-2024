function greet(name) {
   const greetedName =name
   return function(greetValue){
        return `${greetValue}, ${greetedName}!`
   }
}

const greetJohn = greet('John');
greetJohn('Hello'); // Output: Hello, John!