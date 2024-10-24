import { sanitizeInput, showErrorMessage } from './utils.js';
import { validateName, validatePhone } from './validation.js';
import { displayContacts } from './dom.js';
import { loadContacts, saveContacts } from './storage.js';

/**
 * Handles adding a new contact to the list.
 * 
 * @param {Event} e - The event object.
 * @param {Array} contacts - Array of contact objects.
 */
export function addContact(e, contacts) {
  e.preventDefault();
  const name = sanitizeInput(document.getElementById('name').value.trim());
  const phone = sanitizeInput(document.getElementById('phone').value.trim());
  const terms = document.getElementById('terms').checked;

 
if (!validateName(name)) {
  showErrorMessage('Name should contain only letters.', 'name');
}

if (!validatePhone(phone)) {
  showErrorMessage('Phone should contain only numbers.', 'phone');
  return;
}

if (!terms) {
  showErrorMessage('You must accept the terms.', 'terms');
  return;
}

  const newContact = { id: Date.now(), name, phone };
  contacts.push(newContact);
  saveContacts(contacts);
  displayContacts(contacts);

  document.getElementById('contacts').reset();
}

/**
 * Filters the contacts based on the input value.
 * 
 * @param {Array} contacts - Array of contact objects to filter.
 */
export function filterContacts(contacts) {
  const filterValue = document.getElementById('filter').value.toLowerCase();
  const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterValue));
  displayContacts(filteredContacts);
}

/**
 * Clears the filter input and displays all contacts.
 */
export function clearFilter() {
  document.getElementById('filter').value = '';
  displayContacts(loadContacts());
}

/**
 * Handles the click actions (edit/delete) for contacts.
 * 
 * @param {Event} e - The event object.
 * @param {Array} contacts - Array of contact objects.
 */
export function handleContactActions(e, contacts) {
  const contactId = e.target.parentElement.getAttribute('data-id');
  if (e.target.classList.contains('delete-btn')) {
    contacts = contacts.filter(contact => contact.id !== Number(contactId));
    saveContacts(contacts);
    displayContacts(contacts);
  }
}
