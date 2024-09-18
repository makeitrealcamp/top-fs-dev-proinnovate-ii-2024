// import { addContact, clearFilter, displayContacts, filterContacts, handleContactActions, loadContacts } from "./src/index.js";

/**
 * Initialize event listeners and display contacts on DOMContentLoaded.
 */
// const contactForm = document.getElementById('contacts');
// const contactList = document.getElementById('contactList');
// const filterInput = document.getElementById('filter');
// const clearFilterBtn = document.getElementById('clearFilterBtn');

// let contacts = loadContacts();

// contactForm.addEventListener('submit', (e) => addContact(e, contacts));
// filterInput.addEventListener('input', () => filterContacts(contacts));
// clearFilterBtn.addEventListener('click', clearFilter);
// contactList.addEventListener('click', (e) => handleContactActions(e, contacts));

// document.addEventListener('DOMContentLoaded', () => displayContacts(contacts));

const URL = 'https://jsonplaceholder.typicode.com';
const usersEndpoint = '/users';
const postsEndpoint = '/posts';

fetch(`${URL}${usersEndpoint}`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
});
//   .then((response) => response.json())
//   .then((data) => console.log({ data }))
//   .catch((error) => console.error('Error:', error));

fetch(`${URL}${postsEndpoint}/1`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
})
  .then((response) => response.json())
  //   .then((data) => console.log({ data }))
  .catch((error) => console.error('Error:', error))
  .finally(() => console.log('Request completed'));

async function getPosts() {
  try {
    const response = await fetch(`${URL}/post`);
    const data = await response.json();
    console.log({ data });
    return data;
  } catch (error) {
    throw new Error('Get posts API ERROR:', error);
    console.error(error);
  }
}

getPosts().catch((error) => console.error(error));
// console.log({ data });

// const list = document.getElementById('contactList');
// const post = document.createElement('li');
// post.innerHTML = `<strong>${data[0].title}</strong> ${data[0].body}`;

// list.appendChild(post);
