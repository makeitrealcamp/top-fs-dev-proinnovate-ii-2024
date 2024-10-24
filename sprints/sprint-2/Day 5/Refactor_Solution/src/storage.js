/**
 * Loads contacts from localStorage.
 * 
 * @returns {Array} Array of contact objects loaded from localStorage.
 */
export function loadContacts() {
  return JSON.parse(localStorage.getItem('contacts')) || [];
}

/**
 * Saves contacts to localStorage.
 * 
 * @param {Array} contacts - Array of contact objects to be saved.
 */
export function saveContacts(contacts) {
  localStorage.setItem('contacts', JSON.stringify(contacts));
}
