
# Bootcamp Day 4: ECMAScript 2015-2016 and JavaScript Concepts

## Overview
Welcome to Day 4 of the bootcamp! Today, we’ll dive into ECMAScript 2015 (ES6) and ECMAScript 2016, covering fundamental and advanced JavaScript concepts. By the end of the day, you’ll have a solid understanding of modern JavaScript and be able to apply these concepts in real-world applications.

## ECMAScript 2015 (ES6)

ECMAScript 2015, commonly known as ES6, introduced several new features and syntax improvements to JavaScript. These enhancements make the language more powerful and easier to work with.

### Key Features of ES6

- **Let and Const**: Block-scoped variable declarations.
- **Arrow Functions**: Concise syntax for writing functions.
- **Template Literals**: Enhanced string literals with embedded expressions.
- **Destructuring**: Extracting values from arrays or objects into distinct variables.
- **Default Parameters**: Functions can have default values for parameters.
- **Rest and Spread Operators**: Working with variable numbers of arguments and array spreading.
- **Classes**: Simplified syntax for creating objects and inheritance.
- **Modules**: Native support for modular code.
- **Promises**: Handling asynchronous operations with `.then()` and `.catch()`.

### Example: Arrow Functions and Template Literals
```javascript
// Arrow function
const greet = (name) => `Hello, ${name}!`;

console.log(greet('Alice')); // Output: Hello, Alice!
```

### Exercise 1: Convert a Function to an Arrow Function
Convert the following function to an arrow function:
```javascript
function add(a, b) {
    return a + b;
}
```

## ECMAScript 2016 (ES7)

ES7 brought more minor updates compared to ES6, but still important improvements:

- **Exponentiation Operator**: `**` operator for exponentiation.
- **Array.prototype.includes**: Easier method to check if an array includes a certain element.

### Example: Exponentiation Operator
```javascript
let base = 2;
let exponent = 3;
let result = base ** exponent;
console.log(result); // Output: 8
```

### Exercise 2: Use Array.prototype.includes
Check if the array `[1, 2, 3, 4, 5]` includes the number `3`.

## JavaScript Fundamental Concepts

### 1. Data Types and Variables
JavaScript supports various data types including `string`, `number`, `boolean`, `null`, `undefined`, `object`, and `symbol`.

#### Example: Declaring Variables
```javascript
let name = "John";
const age = 30;
let isStudent = false;
```

### 2. Functions and Scope
Functions are blocks of reusable code. They can be declared using the `function` keyword or as arrow functions in ES6.

#### Example: Function Declaration and Scope
```javascript
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 3)); // Output: 6
```

### Exercise 3: Write a Function
Write a function `square` that takes a number as input and returns its square.

## JavaScript Advanced Concepts

### 1. Execution Context and Lexical Scope
An **execution context** is an abstract concept that holds information about the environment within which the current code is being executed. It contains references to the variable environment, scope chain, and the `this` value.

**Lexical scope** refers to the fact that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope.

#### Example: Lexical Scope and Execution Context
```javascript
function outerFunction() {
    const outerVar = 'I am outside!';

    function innerFunction() {
        console.log(outerVar); // Can access outerVar due to lexical scope
    }

    innerFunction();
}

outerFunction(); // Output: I am outside!
```

### 2. Scope Chaining
**Scope chaining** occurs when a function is executed, and it looks up the scope chain to find variables. The scope chain is a list of all the variables in the current scope and all outer scopes that are accessible.

#### Example: Scope Chaining
```javascript
const globalVar = 'Global';

function outerFunction() {
    const outerVar = 'Outer';

    function innerFunction() {
        const innerVar = 'Inner';
        console.log(globalVar); // Access global scope
        console.log(outerVar);  // Access outer scope
        console.log(innerVar);  // Access inner scope
    }

    innerFunction();
}

outerFunction();
// Output:
// Global
// Outer
// Inner
```

### 3. Closures
A **closure** is a function that retains access to its lexical scope, even when the function is executed outside that lexical scope.

#### Example: Closure
```javascript
function createCounter() {
    let count = 0;

    return function() {
        count += 1;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

### Exercise 4: Create a Closure
Create a closure that keeps track of the number of times a function is called.

### 4. Variable Shadowing
**Variable shadowing** occurs when a variable declared within a certain scope (e.g., a function) has the same name as a variable declared in an outer scope. The inner variable shadows the outer one within its scope.

#### Example: Variable Shadowing
```javascript
const shadowVar = 'Outside';

function shadowingExample() {
    const shadowVar = 'Inside'; // Shadows the outer shadowVar
    console.log(shadowVar);
}

shadowingExample(); // Output: Inside
console.log(shadowVar); // Output: Outside
```

### 5. Promises and Async/Await
Promises represent the eventual completion or failure of an asynchronous operation. `async/await` simplifies working with promises.

#### Example: Promises and Async/Await
```javascript
// Promise example
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("The operation was successful.");
    } else {
        reject("The operation failed.");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((message) => {
    console.log(message);
});

// Async/Await example
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error);
    }
}
```

### Exercise 5: Use Async/Await
Create a function that uses `async/await` to fetch data from a public API and logs the result.

### 6. Modules and Import/Export
Modules allow you to break down your code into reusable pieces. ES6 introduced the `import` and `export` syntax for working with modules.

#### Example: Import/Export
```javascript
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from './math.js';

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

### Exercise 6: Create a Module
Create a module that exports a function to calculate the area of a rectangle. Import this module in another file and use the function.

## Conclusion
Today’s session covered essential and advanced JavaScript concepts, including execution context, lexical scope, closures, and more. Make sure to complete the exercises to solidify your understanding. These concepts are crucial for writing modern, efficient, and maintainable JavaScript code.

## Resources
- **MDN Web Docs**: [JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **ECMAScript 2015 Specification**: [ECMA-262](https://www.ecma-international.org/ecma-262/6.0/)
- **JavaScript.info**: [Modern JavaScript Tutorial](https://javascript.info/)

Good luck, and enjoy your learning!
