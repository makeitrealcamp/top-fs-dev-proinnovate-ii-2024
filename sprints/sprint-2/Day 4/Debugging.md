
# Debugging Like a Pro in JavaScript

Debugging is an essential skill for any developer, and mastering it can save you countless hours of frustration. In this guide, we'll explore various debugging techniques, tools, and strategies that will help you identify and fix issues in your JavaScript code effectively.

## Table of Contents
- [Basic Debugging Techniques](#basic-debugging-techniques)
- [Using Console for Debugging](#using-console-for-debugging)
- [Working with Breakpoints](#working-with-breakpoints)
- [Using the `debugger` Keyword](#using-the-debugger-Keyword)
- [Debugging with DevTools](#debugging-with-devtools)
- [Common Debugging Scenarios](#common-debugging-scenarios)
- [Debugging Exercises](#debugging-exercises)

## Basic Debugging Techniques

### 1. Understanding Errors
The first step in debugging is understanding the error messages that JavaScript provides. Syntax errors, reference errors, and type errors are common, and reading the error stack trace can give you insights into where the problem lies.

**Example:**
```javascript
function addNumbers(a, b) {
  return a + c; // ReferenceError: c is not defined
}
```
addNumbers(5, 10);` 

The error tells you that `c` is not defined. Checking the code, you'll realize that the correct variable should be `b`.

### 2. Simplifying the Problem

If your code is complex, try to simplify it by isolating the problematic part. You can comment out parts of your code or use small test cases to focus on the issue.

**Example:**

```javascript

`function calculateTotal(items) {
  return items.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

// Test with a simplified case
console.log(calculateTotal([{ price: 10 }, { price: 20 }])); // Works fine
console.log(calculateTotal([])); // Also works fine` 
```
## Using Console for Debugging

The `console` object is your best friend when it comes to quick debugging. You can log variables, objects, and even stack traces.

### 1. `console.log()`

The most basic way to print information to the console.

**Example:**
```javascript

let name = "Alice";
console.log("The name is:", name); // Outputs: The name is: Alice` 
```

### 2. `console.table()`

Use this to print tabular data like arrays of objects.

**Example:**


```javascript

`let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
console.table(users);` 
```
### 3. `console.error()` and `console.warn()`

Use these to print errors or warnings in a different style, making them stand out.

**Example:**

```javascript

`let age = -1;
if (age < 0) {
  console.error("Age cannot be negative!");
}` 
```
## Working with Breakpoints

Breakpoints allow you to pause the execution of your code at a specific line, inspect the current state, and step through your code one line at a time.

### 1. Setting Breakpoints in DevTools

In Chrome DevTools, you can click on the line number in the "Sources" tab to set a breakpoint. When the code execution reaches that line, it will pause, and you can inspect variables and the call stack.

### 2. Conditional Breakpoints

Right-click on a line number and select "Add conditional breakpoint..." to set a breakpoint that only triggers when a certain condition is met.

**Example:**

```javascript

function processItems(items) {
  items.forEach((item, index) => {
    // Add a conditional breakpoint here to check if index > 3
    console.log(index, item);
  });
}` 
```

## Using the `debugger` Keyword

The `debugger` keyword is a built-in tool in JavaScript that allows you to manually pause the execution of your code at any point, directly opening the debugging tools in your browser or IDE.

### How to Use `debugger`

When the JavaScript engine encounters the `debugger` statement, it will stop execution at that point, and if developer tools are open, it will pause the script, allowing you to inspect variables, evaluate expressions, and step through your code.

**Example:**
```javascript
function calculateTotal(items) {
  let total = 0;
  items.forEach(item => {
    debugger; // Pauses execution here
    total += item.price;
  });
  return total;
}

let shoppingCart = [{ price: 10 }, { price: 20 }, { price: 30 }];
console.log(calculateTotal(shoppingCart));
```
### When to Use `debugger`

-   **Complex Logic:** When dealing with complex algorithms or logic where you need to understand how data changes over time.
-   **Unexpected Results:** When a function is returning unexpected results, using `debugger` can help you step through the execution flow.
-   **Isolating Bugs:** Place `debugger` in different parts of your code to isolate where a bug might be occurring.

### Debugging with `debugger` in Real Scenarios

Here’s a scenario where `debugger` can be particularly useful:

**Example:**

```javascript
function findMaxValue(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      debugger; // Check why max is not updating as expected
      max = numbers[i];
    }
  }
  return max;
}

let values = [10, 15, 25, 20, 30, 5];
console.log(findMaxValue(values)); // You can inspect 'max' at each iteration` 
```
In this example, you can use `debugger` to pause the code execution during each iteration of the loop and inspect the value of `max` and `numbers[i]`. This can help you understand the loop's behavior and ensure the logic is correct.

### Removing `debugger` Statements

Once you've finished debugging, remember to remove or comment out `debugger` statements to avoid pausing execution in a production environment.

```javascript
`function findMaxValue(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    // debugger; // Commented out after debugging
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}` 
```

## Debugging with DevTools

DevTools offers powerful debugging features beyond breakpoints.

### 1. Inspecting Variables

When paused at a breakpoint, you can hover over variables to see their current value or view them in the "Scope" section of the DevTools.

### 2. Call Stack

The call stack shows the sequence of function calls that led to the current breakpoint. This is helpful to trace how a particular code path was reached.

### 3. Watch Expressions

You can add expressions to the "Watch" panel in DevTools to monitor their values as you step through your code.

## Common Debugging Scenarios

### 1. Undefined Variables

Check if the variable is defined where you expect it to be. Use `console.log()` or breakpoints to inspect the variable.

### 2. Incorrect Data Types

Ensure that your variables have the correct data types. For example, adding a string to a number can cause unexpected results.

### 3. Off-by-One Errors

These often occur in loops and are caused by incorrectly using indices. Double-check your loop conditions and indices.

## Debugging Exercises

### Exercise with `debugger`

Try adding `debugger` to the following code and step through it:

**Exercise:**

```javascript
function sumOfSquares(numbers) {
  let sum = 0;
  numbers.forEach(number => {
    let square = number * number;
    debugger; // Pause and inspect the square and sum values
    sum += square;
  });
  return sum;
}

let values = [2, 3, 4];
console.log(sumOfSquares(values)); // What happens at each iteration?` 
```
**Task:** Use `debugger` to inspect the values of `square` and `sum` during each iteration. Check how the sum accumulates and ensure that the logic is functioning as expected.

### Beginner Level

1.  **Fix the Reference Error**
    
```javascript
    
   function multiplyNumbers(a, b) {
      return a * c; // ReferenceError: c is not defined
    }
    console.log(multiplyNumbers(5, 10));
``` 
**Task:** Fix the error in the function so that it returns the correct result.
    
2.  **Correct the Logic Error**
    
```javascript
function isEven(num) {
      return num % 2 === 1;
    }
    console.log(isEven(4)); // false, but should be true
```
   **Task:** Identify and correct the logic error in the `isEven` function.
    
3.  **Debug the Loop**
    
```javascript
function printNumbers() {
      for (let i = 0; i < 5; i++);
        console.log(i);
    }
    printNumbers(); // Outputs: 5, but should output 0, 1, 2, 3, 4` 
```   
**Task:** Debug and fix the loop so that it prints the correct numbers.
    

### Medium Level

1.  **Fix the Array Manipulation**
    
```javascript
function removeItem(items, itemToRemove) {
      let index = items.indexOf(itemToRemove);
      if (index !== -1) {
        items.slice(index, 1);
      }
      return items;
    }
    console.log(removeItem([1, 2, 3, 4], 3)); // Outputs: [1, 2, 3, 4] but should be [1, 2, 4]
```
**Task:** Debug and correct the `removeItem` function.
    
2.  **Resolve the Undefined Issue**
    
```javascript
function greetUser(user) {
      console.log("Hello, " + user.name);
    }
    greetUser(); // TypeError: Cannot read property 'name' of undefined 
```  
**Task:** Debug the function to handle cases where the `user` argument is not provided.
    
3.  **Fix the Asynchronous Issue**
```javascript
function fetchData(callback) {
      setTimeout(() => {
        callback("Data fetched");
      }, 1000);
    }
    
    let data = fetchData((message) => {
      console.log(message);
    });
    console.log(data); // Outputs: undefined` 
```    
**Task:** Modify the code so that `data` contains the fetched message.

### Advanced Level

1.  **Debug the Object Context Issue**
    
```javascript
 const person = {
      name: "Alice",
      greet: function() {
        setTimeout(function() {
          console.log("Hello, " + this.name);
        }, 1000);
      }
    };
    person.greet(); // Outputs: Hello, undefined` 
``` 
**Task:** Fix the code so that it correctly outputs "Hello, Alice".
    
2.  **Correct the Closure Issue**
    
```javascript
	  function createCounters() {
      let counters = [];
      for (var i = 0; i < 5; i++) {
        counters[i] = function() {
          return i;
        };
      }
      return counters;
    }
    let counters = createCounters();
    console.log(counters[0]()); // Outputs: 5, but should be 0` 
``` 
**Task:** Modify the code to correctly implement closures so that each counter returns the expected value.
    
3.  **Fix the Promises Issue**
    
```javascript
function getData() {
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data"), 1000);
      });
    }
    
    getData()
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    console.log("Fetch initiated"); // Outputs: Fetch initiated, then Data, but should wait for Data first
``` 
**Task:** Modify the code so that "Fetch initiated" only logs after the data has been fetched.