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
    //get key

    const keyResponse = await fetch(
      'http://localhost:3000/api/subscription/key'
    );
    const keyBuffer = await keyResponse.arrayBuffer();
    const key = new Uint8Array(keyBuffer);

    if (!swRegistration) {
      return;
    }
    console.log({
      key,
    });
    swRegistration.pushManager
      .subscribe({
        userVisibleOnly: true,
        applicationServerKey: key,
      })
      .then(function (pushSubscription) {
        console.log({ subscription: pushSubscription });
        fetch('http://localhost:3000/api/subscription', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ subscription: pushSubscription }),
        }).then(function (response) {
          console.log({ response });
        });
      });
  });
});
