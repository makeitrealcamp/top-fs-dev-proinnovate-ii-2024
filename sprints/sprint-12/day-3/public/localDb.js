function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('todo-app', 1);
    request.onerror = reject;
    request.onsuccess = (e) => resolve(e.request.result);
    request.onupgradeneeded = (e) => {
      const db = e.request.result;
      db.createObjectStore('todos', { keyPath: 'id', autoIncrement: true });
    };
  });
}

async function handleAPIrequest(request) {
try {
    console.log('handleAPIrequest', request);
    const response = await fetch(request);
    const responseClone = response.clone();
  
    const db = await openDatabase();
    const tx = db.transaction('todos', 'readwrite');
    const store = tx.objectStore('todos');
    const data = await responseClone.json();
    store.put({ id: 1, data });
    return  response
} catch (error) {
    console.log('error', error);
}
}
