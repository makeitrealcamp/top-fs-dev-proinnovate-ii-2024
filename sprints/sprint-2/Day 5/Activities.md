# Code challenge End Sprint 2

## Code Challenge: Expense Tracker Application


Congratulations! This is the end of the second sprint. For this sprint, you have 3 code challenges to complete:

    Refactor Legacy Code: Take an existing piece of legacy code that doesn't follow modern JavaScript practices and refactor it. Focus on improving code readability, organization, and efficiency by implementing ES6+ syntax, modular structure, and removing redundancy.

    Implement a Feature: Build a new feature from scratch. This feature should integrate smoothly into the existing application and demonstrate your ability to add functionality to an already established codebase. Make sure to test thoroughly and follow clean code principles.

    Create a New App - Expenses Tracker: Design and develop a simple expenses tracker application. The app should allow users to input their expenses, categorize them (e.g., food, transport, entertainment), and view a summary of their spending. Focus on building a clean, intuitive UI and organizing the code in a modular way. Use modern JavaScript practices and ensure the app is responsive and user-friendly.

## First Challenge (Individual)

NOTE: Codebase is the Sprint 2 / DAY 5

You are the new developer for the company ACME. They've assigned you to work on their contact list application, which was created a long time ago and doesn't follow modern JavaScript best practices. The codebase is full of spaghetti code—functions and logic scattered across the application with little structure, making it difficult to maintain and extend.

Your primary task is to refactor this contact list application by applying modular JavaScript principles, improving readability, and organizing the code in a way that follows current best practices. You'll break down large functions into smaller, reusable pieces, replace outdated JavaScript features with modern ES6+ syntax, and ensure the code is more maintainable for future developers.
Additional Task: Implement a Filter Feature

In addition to refactoring, you will need to implement a filter feature that allows users to search and filter through the contact list based on name, email, or phone number. This feature should be efficient and integrate seamlessly with the newly refactored codebase.

### Objectives:

  Analyze the current codebase and identify areas that need improvement.
    Refactor the code using modules, separating concerns logically.
    Replace var with let/const, use arrow functions, template literals, and other modern JavaScript features.
    Implement the filter functionality to search contacts dynamically as the user types.
    Ensure the application maintains its current functionality after refactoring.
    Write comments where necessary to explain complex sections of code.

## Second challenge (groups)
Objective:

Create an expense tracker web application that allows users to log their expenses, categorize them, and visualize their spending habits over time. The app should be built using HTML, CSS, and JavaScript, following Object-Oriented Programming (OOP) principles.
Requirements:
Object-Oriented Structure:

Implement the app using JavaScript classes.
At a minimum, you should have:
* An Expense class to represent individual expenses.
* A Category class to manage different expense categories (e.g., Food, Transport, Entertainment).
* A Tracker class to manage the overall application logic (adding expenses, calculating totals, etc.).
Expense Properties:

Each expense should have the following attributes:
* Amount (number)
* Description (text)
* Date (automatically assigned or manually entered)
* Category (selected from predefined categories or custom)
User Interface:

Create a simple, intuitive user interface using HTML and CSS where users can:
Add a new expense by filling in a form with the required fields (amount, description, date, and category).
View a list of all logged expenses, including a summary of expenses by category.

Data Persistence:

Use localStorage to save expenses, so they persist between page reloads.

Implement functionality to:
* Save new expenses to localStorage.
* Retrieve and display expenses from localStorage upon app load.
Categories:

Include at least 5 default categories (e.g., Food, Transport, Utilities, Entertainment, Others).
Allow users to create their custom categories.
Date Management:

    Expenses should be logged with a date field that can be manually input or selected using a date picker. Total and Summary Calculations:

Show the total amount spent and break it down by categories.
Provide filtering options to view expenses by date range or category.
Bonus Features:
CRUD:

Allow users to EDIT, DELETE, UPDATE transactions
Charts:

Display a line chart showing expenses over time.
Display a bar chart showing the breakdown of expenses by category.
you can use a JavaScript charting library (e.g., Chart.js) to visualize expenses.
Advanced Storage (IndexedDB):

Instead of localStorage, use IndexedDB for more advanced data storage.
Ensure that expenses are stored in a structured format, and provide the same data persistence features.
Key Functionality Checklist:

    Users can add expenses with amount, description, date, and category.
    Data is saved in localStorage or IndexedDB (Bonus) and persists across sessions.
    Users can view all expenses and filter by category or date range.
        A summary of expenses is shown, including totals and breakdown by category. Charts (optional) display visual summaries of the data.

Evaluation Criteria:

    Proper usage of JavaScript classes (OOP principles).
    Clean and modular code structure.
    Proper handling of data persistence with localStorage or IndexedDB.
    Usability and design of the user interface.
    Bonus: Implementation of charts and advanced data storage using IndexedDB