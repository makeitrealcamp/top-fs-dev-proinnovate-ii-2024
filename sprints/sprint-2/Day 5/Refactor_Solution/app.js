import { addContact, clearFilter, displayContacts, filterContacts, handleContactActions, loadContacts } from "./src/index.js";

/**
 * Initialize event listeners and display contacts on DOMContentLoaded.
 */
const contactForm = document.getElementById('contacts');
const contactList = document.getElementById('contactList');
const filterInput = document.getElementById('filter');
const clearFilterBtn = document.getElementById('clearFilterBtn');

let contacts = loadContacts();

contactForm.addEventListener('submit', (e) => addContact(e, contacts));
filterInput.addEventListener('input', () => filterContacts(contacts));
clearFilterBtn.addEventListener('click', clearFilter);
contactList.addEventListener('click', (e) => handleContactActions(e, contacts));

document.addEventListener('DOMContentLoaded', () => displayContacts(contacts));
