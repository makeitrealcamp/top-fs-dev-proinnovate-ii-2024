# Activities for arrays
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

Medium
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


Advanced
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