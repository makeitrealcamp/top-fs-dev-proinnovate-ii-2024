let swRegistration = null;

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('sw.js').then(
      function (registration) {
        console.log(
          'ServiceWorker registration successful with scope: ',
          registration.scope
        );
        swRegistration = registration;
      },
      function (err) {
        console.log('ServiceWorker registration failed: ', err);
      }
    );
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach(function (todo, index) {
      const li = document.createElement('li');
      li.textContent = todo;

      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', function () {
        todos.splice(index, 1);
        saveAndRenderTodos();
      });

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    });
  }

  function saveAndRenderTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos();
  }

  todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTodo = todoInput.value.trim();
    if (newTodo !== '') {
      todos.push(newTodo);
      saveAndRenderTodos();
      todoInput.value = '';
    }
  });

  renderTodos();

  const notifications = document.getElementById('notifications');
  notifications.addEventListener('click', async function () {
    if (!swRegistration) {
      console.error('Service Worker is not registered.');
      return;
    }
  

    const keyResponse = await fetch('http://localhost:3000/api/subscription/key');
    const keyBuffer = await keyResponse.arrayBuffer();
    const applicationServerKey = new Uint8Array(keyBuffer);
  
    try {
      const subscription = await swRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey,
      });
  

      const response = await fetch('http://localhost:3000/api/subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to subscribe on the server');
      }
  
      console.log('User is subscribed:', subscription);
    } catch (err) {
      console.error('Failed to subscribe the user:', err);
    }
  });
});
