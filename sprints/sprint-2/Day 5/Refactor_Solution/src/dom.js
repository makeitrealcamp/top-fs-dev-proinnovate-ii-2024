/**
 * Displays the list of contacts in the DOM.
 * 
 * @param {Array} contactArray - Array of contact objects to be displayed.
 */
export function displayContacts(contactArray) {
  const contactList = document.getElementById('contactList');
  contactList.innerHTML = '';
  contactArray.forEach(contact => {
    const li = document.createElement('li');
    li.classList.add('contact-item');
    li.setAttribute('data-id', contact.id);

    li.innerHTML = `
      <strong>${contact.name}</strong> - ${contact.phone}
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    contactList.appendChild(li);
  });
}
