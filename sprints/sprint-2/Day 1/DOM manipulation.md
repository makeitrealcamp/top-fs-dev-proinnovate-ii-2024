
# Bootcamp Day 4/5: Afternoon - DOM Manipulation and Events


### What is the DOM?
The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, with each object corresponding to a part of the document, such as an element or attribute. The DOM allows you to access and manipulate the content and structure of HTML documents using JavaScript.

### Accessing Elements
- **`document.getElementById(id)`**: Selects an element by its `id` attribute.
- **`document.querySelector(selector)`**: Selects the first element that matches a CSS selector.
- **`document.getElementsByClassName(className)`**: Selects all elements with a given class name.

#### Example: Accessing Elements
```javascript
// Accessing elements
const header = document.getElementById('header');
const firstParagraph = document.querySelector('p');
const items = document.getElementsByClassName('item');

// Modifying elements
header.textContent = 'Welcome to the Bootcamp!';
firstParagraph.style.color = 'blue';
```

### Modifying Elements
You can modify the content, attributes, and styles of elements using JavaScript.
- **Text**: Change the text content with `textContent` or `innerHTML`.
- **Attributes**: Modify attributes using `setAttribute()` or direct property access.
- **Styles**: Modify the `style` property to change the appearance of elements.

#### Example: Modifying Elements
```javascript
const button = document.querySelector('button');
button.textContent = 'Click Me';
button.setAttribute('disabled', true);
button.style.backgroundColor = 'gray';
```

### Understanding Events
Events are actions or occurrences that happen in the browser, such as clicks, form submissions, or keyboard inputs. JavaScript allows you to respond to these events using event listeners.

### Adding Event Listeners
- **`addEventListener(type, listener)`**: Adds an event listener to an element. The `type` parameter specifies the type of event (e.g., "click"), and the `listener` parameter is the function that handles the event.

#### Example: Adding Event Listeners
```javascript
const button = document.querySelector('button');
button.addEventListener('click', function() {
    alert('Button clicked!');
});
```

### Handling Form Submissions and Validations
You can use JavaScript to handle form submissions and validate user input before sending data to the server.

#### Example: Form Validation
```javascript
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    const input = document.querySelector('input');
    if (input.value === '') {
        event.preventDefault();
        alert('Please fill out the field.');
    }
});
```

### Creating Dynamic Content
You can create new elements and add them to the DOM using methods like `document.createElement()` and `appendChild()`.

#### Example: Creating and Appending Elements
```javascript
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
document.body.appendChild(newDiv);
```

### Practice Modifying the DOM
Practice modifying the DOM based on user interactions. For example, you can show or hide elements, update content dynamically, or create interactive features.

#### Example: Toggling Visibility
```javascript
const toggleButton = document.querySelector('#toggle');
const content = document.querySelector('#content');

toggleButton.addEventListener('click', function() {
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
});
```

## Best Practices for DOM Manipulation
1. **Minimize DOM Access**: Accessing the DOM can be slow, so minimize the number of times you interact with it.
2. **Use Event Delegation**: Instead of attaching event listeners to multiple elements, attach a single listener to a common parent element.
3. **Avoid Inline Styles**: Use CSS classes to control the appearance of elements, rather than setting styles directly in JavaScript.
4. **Optimize Reflows and Repaints**: Group DOM changes together to avoid multiple reflows and repaints.

## Bubbling and Capture

### Event Bubbling
Event bubbling is a process where an event starts at the target element and then bubbles up to its parent elements. For example, if a `click` event occurs on a button inside a div, the event first triggers on the button, then on the div, and so on, up to the root element.

### Event Capture
Event capture (or trickling) is the opposite of bubbling. The event starts at the root and trickles down to the target element. By default, events are handled in the bubbling phase, but you can specify the capture phase when adding an event listener.

#### Example: Bubbling vs. Capture
```javascript
document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent clicked');
}, false); // Bubbling

document.querySelector('#child').addEventListener('click', function() {
    console.log('Child clicked');
}, true); // Capture
```

## stopPropagation()

### Preventing Event Bubbling
The `stopPropagation()` method is used to prevent event bubbling or capturing. When called inside an event handler, it stops the event from propagating to parent elements, effectively halting the event's flow.

#### Example: Using stopPropagation()
```javascript
document.querySelector('#parent').addEventListener('click', function() {
    console.log('Parent clicked');
});

document.querySelector('#child').addEventListener('click', function(event) {
    event.stopPropagation(); // Prevents the event from bubbling up to the parent
    console.log('Child clicked');
});
```

## Event Delegation
Event delegation is a technique where you add a single event listener to a parent element to manage events for multiple child elements. This is more efficient than adding individual listeners to each child element.

#### Example: Event Delegation
```javascript
const list = document.querySelector('ul');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        alert('List item clicked: ' + event.target.textContent);
    }
});
```


### Advanced DOM Manipulation Techniques and Web APIs

#### 1. **Introduction to HTML Templates**

HTML templates are a way to define reusable chunks of HTML in a way that they are not rendered immediately. Instead, they can be cloned and inserted into the DOM as needed.

**Example:**
```javascript
<template id="my-template">
  <div class="card">
    <h2></h2>
    <p></p>
  </div>
</template>

<div id="container"></div>

<script> const template = document.getElementById('my-template');
  const container = document.getElementById('container');

  const data = [
    { title: 'Card 1', content: 'Content for card 1' },
    { title: 'Card 2', content: 'Content for card 2' },
  ];

  data.forEach(item => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('h2').textContent = item.title;
    clone.querySelector('p').textContent = item.content;
    container.appendChild(clone);
  }); </script>` 
  ```

#### 2. **Generating Components in the DOM Using JavaScript and Templates**

You can use JavaScript to generate components dynamically in the DOM using templates.

**Example:**


```javascript
<template id="card-template">
  <div class="card">
    <h2 class="card-title"></h2>
    <button class="delete-btn">Delete</button>
  </div>
</template>

<div id="app"></div>

<script> const app = document.getElementById('app');
  const cardTemplate = document.getElementById('card-template').content;

  function createCard(title) {
    const card = cardTemplate.cloneNode(true);
    card.querySelector('.card-title').textContent = title;
    card.querySelector('.delete-btn').addEventListener('click', () => {
      card.remove();
    });
    app.appendChild(card);
  }

  createCard('First Card');
  createCard('Second Card'); </script>` 
```
#### 3. **Adding Reactivity**

Reactivity can be added to vanilla JS by manually updating the DOM when data changes.

**Example:**
```html
<div id="counter-app">
  <h2>Counter: <span id="counter">0</span></h2>
  <button id="increment-btn">Increment</button>
</div>

<script> let counter = 0;
  const counterDisplay = document.getElementById('counter');
  const incrementBtn = document.getElementById('increment-btn');

  incrementBtn.addEventListener('click', () => {
    counter++;
    counterDisplay.textContent = counter;
  }); </script>
  ```

## Exercises

### Beginner

1. **Change Button Text**: Create a button that changes its text when clicked.
2. **Toggle Visibility**: Write a function that toggles the visibility of a paragraph when a button is clicked.
3. **Change Background Color**: Create a button that changes the background color of the page when clicked.
4. **Add List Item**: Build a function that adds a new item to an unordered list when a button is clicked.
5. **Display Alert**: Write a function that displays an alert when a form is submitted.

### Medium

1. **Form Validation**: Create a form with multiple fields and validate the input before allowing submission.
2. **Image Slider**: Build an image slider where users can click buttons to view the next or previous image.
3. **Accordion**: Implement an accordion menu where clicking a section header reveals or hides the content.
4. **Tab Navigation**: Create a tab navigation system where clicking on a tab shows its content and hides the others.
5. **Interactive Gallery**: Build an interactive image gallery where clicking a thumbnail displays the full-size image.

### Advanced

1. **To-Do List with Local Storage**: Create a to-do list where tasks are saved to local storage so that they persist between page reloads.
2. **Dynamic Form Fields**: Implement a form where users can add or remove fields dynamically (e.g., adding more email addresses).
3. **Drag-and-Drop List**: Build a sortable list where users can drag and drop items to reorder them.
4. **Real-Time Search Filter**: Create a product list with a search input that filters the list in real-time as the user types.
5. **Custom Context Menu**: Build a custom right-click context menu for a specific element on the page, with options that perform different actions.

Use what you’ve learned today to build a simple interactive webpage. Here are a few project ideas:
- **To-Do List**: Create a to-do list where users can add, delete, and mark tasks as complete.
- **Form with Dynamic Validation**: Build a form with real-time validation, showing errors as the user types.
- **Product List with Search Filter**: Create a list of products with a search filter to allow users to find products quickly.