# Activities for arrays

1. Import Json file
2. Transform to javascript Object

## Exercises Based on the API Response

- use the `fakeApiResponse` file to solve this activities
  
### Beginner

1. map() - Extracting Customer Names:
Write a function that extracts all the customer names from the orders array using map(). The result should be an array of names like ["Alice Johnson", "Bob Smith", ...].

2. filter() - Orders Above a Certain Amount:
Use filter() to create a function that returns only the orders where the totalAmount is greater than $1000. This will help identify high-value orders.

3. find() - Locate a Specific Order:
Write a function that uses find() to locate the order with the orderId "003". The function should return the full order details.

4. findIndex() - Find the Position of a Customer’s Order:
Use findIndex() to find the position of "Diana Ross"'s order in the array. Return the index of her order.

5. includes() - Check If a Product Is in Any Order:
Write a function that checks if any of the orders include a "Laptop" among the items purchased using some() and includes().

## Medium

1. reduce() - Calculate Total Revenue:
Use reduce() to calculate the total revenue from all orders. The result should be the sum of all totalAmount values.

2. flatMap() - List All Purchased Products:
Write a function that uses flatMap() to create a list of all products that have been purchased across all orders. The function should return an array of product names.

3. slice() - Preview Recent Orders:
Create a function that uses slice() to return the last 3 orders made. This function could be used to show the most recent orders on an admin dashboard.

4. splice() - Cancel an Order:
Write a function that uses splice() to remove an order from the array based on a given orderId. This simulates canceling an order.

5. groupBy() - Group Orders by Date:
Use reduce() or the groupBy() method (if supported) to group orders by their date. The result should be an object where each key is a date, and the value is an array of orders for that date.

## Advanced

1. map() and reduce() - Calculate Total Quantity of Each Product Sold:
Combine map() and reduce() to calculate the total quantity sold for each product across all orders. The result should be an object where the keys are product names and the values are the total quantities sold.

2. flatMap() and groupBy() - Group Orders by Customer:
Use flatMap() and groupBy() (or reduce() for grouping) to create a summary that groups orders by customerName. The result should be an object where each key is a customer’s name, and the value is an array of their orders.

3. find() and splice() - Update an Order:
Write a function that locates an order by orderId using find() and then updates the order details (e.g., change the quantity of a product) using splice().

4. reduce() and flat() - Flatten and Summarize Items:
Use reduce() and flat() to create a function that flattens the list of all items purchased and then summarizes the total quantity of each product sold.

5. map() and filter() - Generate a List of Customers with Multiple Orders:
Write a function that uses map() and filter() to generate a list of customers who have placed more than one order. The function should return an array of customer names.

6. implement the 3 - 4 from medium exercises without mutating the array.

## Exercises Objects

### Beginner

1. Create a class `Book` with properties `title` and `author`, and a method to display the book's details.
2. Create a private property `#price` in the `Product` class and add methods to get and set the price.
3. Implement a `Person` class with a method that returns the person's full name using a traditional function.
4. Create a class `Phone` with a static method that returns a list of supported models.
5. Implement a class `Computer` with an arrow function method that logs the model and year.

### Intermediate

1. Create a class `User` with a private property `#password`. Implement methods to validate and update the password.
2. Extend a `Vehicle` class to create a `Truck` class. Use `super()` to call the parent constructor and add truck-specific properties.
3. Create a `House` class and define a method that uses an arrow function to log details about the house.
4. Implement a class `Employee` that inherits from a `Person` class. Override a method using `super()` to include additional details.
5. Build a class `Gadget` with both public and private properties. Include methods that demonstrate the difference between traditional and arrow functions for accessing properties.

### Advanced

1. Create a class hierarchy where `Vehicle` is the base class, and `Car` and `Bike` are derived classes. Use `super()` and private properties effectively.
2. Implement a class `BankAccount` with private properties for balance and methods for deposit, withdrawal, and balance inquiry. Include validation checks.
3. Create a system where a `User` class has methods that utilize `this` in both traditional and arrow functions. Demonstrate how context affects method behavior.
4. Design a class `Organization` that contains a nested structure of departments. Use methods and properties to calculate overall budget allocation.
5. Build a real-world example like a shopping cart system using classes, private properties, inheritance, and method overriding. Implement context-sensitive features using `this` and arrow functions.
