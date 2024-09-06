# Web API

## **What is a Web API?**

A Web API is a set of protocols and tools for building software and applications. It provides a way for different applications to communicate with each other over the web.

## **Available Web APIs**

- **DOM API**: Manipulate HTML and CSS through JavaScript.
- **Fetch API**: Perform network requests.
- **Storage API**: Use `localStorage` and `sessionStorage`.
- **Geolocation API**: Access geographical location data.
- **Canvas API**: Draw graphics and animations.
- **Web Workers API**: Run scripts in background threads.
- **IndexedDB API**: Manage large amounts of structured data.

### 1. **Fetch API**: Perform Network Requests

The Fetch API is used to make network requests to retrieve resources. It returns a promise that resolves to the Response object representing the response to the request.

**Example:**

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));` 
```

**Explanation:**

- `fetch()` initiates a network request.
- The `.then()` method processes the response, converting it to JSON.
- The `.catch()` method handles any errors that occur during the fetch.

### 2. **Storage API**: Use `localStorage` and `sessionStorage`

The Storage API provides access to `localStorage` and `sessionStorage`, which are key-value storage systems in the browser. They allow you to store data that persists across page reloads (`localStorage`) or only during the session (`sessionStorage`).

**Example with `localStorage`:**

```javascript
// Store data
localStorage.setItem('username', 'JohnDoe');

// Retrieve data
let user = localStorage.getItem('username');
console.log(user); // Outputs: JohnDoe

// Remove data
localStorage.removeItem('username');` 
```

**Example with `sessionStorage`:**

```javascript
// Store data
sessionStorage.setItem('isLoggedIn', 'true');

// Retrieve data
let isLoggedIn = sessionStorage.getItem('isLoggedIn');
console.log(isLoggedIn); // Outputs: true

// Clear all session data
sessionStorage.clear();` 
```

**Explanation:**

- `localStorage` stores data with no expiration time.
- `sessionStorage` stores data for the duration of the page session.

### 3. **Geolocation API**: Access Geographical Location Data

The Geolocation API allows web applications to access the geographical location of the device.

**Example:**

```javascript

`navigator.geolocation.getCurrentPosition(position => {
  console.log('Latitude:', position.coords.latitude);
  console.log('Longitude:', position.coords.longitude);
}, error => {
  console.error('Error occurred:', error);
});` 
```

**Explanation:**

- `getCurrentPosition()` retrieves the device’s current location.
- The first callback function receives the position object with `latitude` and `longitude`.
- The second callback handles errors, such as when the user denies location access.

### 4. **Canvas API**: Draw Graphics and Animations

The Canvas API provides a way to draw graphics and animations on a web page using JavaScript.

**Example:**

```javascript
let canvas = document.getElementById('myCanvas');
let ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = 'blue';
ctx.fillRect(50, 50, 100, 100);

// Draw a circle
ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2);
ctx.fillStyle = 'red';
ctx.fill();` 
```

**Explanation:**

- `getContext('2d')` is used to get the 2D rendering context for drawing on the canvas.
- `fillRect()` draws a filled rectangle.
- `arc()` draws a circle, and `fill()` fills it with the specified color.

### 5. **Web Workers API**: Run Scripts in Background Threads

Web Workers allow you to run scripts in background threads, separate from the main execution thread of the web application. This is useful for performing tasks that are computationally expensive or need to run asynchronously.

**Example:**

```javascript
// worker.js
self.onmessage = function(e) {
  let result = e.data * 2;
  postMessage(result);
};

// main.js
let worker = new Worker('worker.js');
worker.postMessage(10);

worker.onmessage = function(e) {
  console.log('Result:', e.data); // Outputs: 20
};` 
```

**Explanation:**

- In `worker.js`, the worker listens for messages and processes them.
- In `main.js`, a new Worker is created and communicates with the main thread using `postMessage()`.
- Web Workers enable you to offload heavy processing tasks from the main thread to prevent UI blocking.

### 6. **IndexedDB API**: Manage Large Amounts of Structured Data

IndexedDB is a low-level API for storing large amounts of structured data (including files/blobs) in the browser. It's an asynchronous API, meaning that most operations are performed using events and callbacks.

**Example:**

```javascript
let request = indexedDB.open('myDatabase', 1);

request.onupgradeneeded = function(event) {
  let db = event.target.result;
  let objectStore = db.createObjectStore('users', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
};

request.onsuccess = function(event) {
  let db = event.target.result;

  let transaction = db.transaction(['users'], 'readwrite');
  let objectStore = transaction.objectStore('users');

  let user = { id: 1, name: 'Alice' };
  let request = objectStore.add(user);

  request.onsuccess = function() {
    console.log('User added to the store');
  };
};
```

**Explanation:**

- `indexedDB.open()` opens a connection to a database.
- The `onupgradeneeded` event is triggered when the database is created or updated, allowing you to create object stores and indexes.
- `transaction()` creates a transaction, and `objectStore()` accesses a specific store within the database.
- `add()` adds a new record to the object store.
