var contacts = JSON.parse(localStorage.getItem('contacts')) || [];
var contactList = document.getElementById('contactList');
var filterInput = document.getElementById('filter');
var clearFilterBtn = document.getElementById('clearFilterBtn');
var addContactBtn = document.getElementById('addContactBtn');
var contactForm = document.getElementById('contacts');

contactForm.onsubmit = function (e) {
  e.preventDefault();

  var name = document.getElementById('name').value.replace(/[&<>"'/]/g, function (match) {
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
    return map[match];
  }).trim();

  var phone = document.getElementById('phone').value.replace(/[&<>"'/]/g, function (match) {
    var map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
    return map[match];
  }).trim();

  var terms = document.getElementById('terms').checked;

  if (!/^[A-Za-z\s]+$/.test(name)) {
    var nameError = document.createElement('span');
    nameError.classList.add('error');
    nameError.textContent = 'Name should contain only letters.';
    document.getElementById('name').insertAdjacentElement('afterend', nameError);
    setTimeout(function () { nameError.remove(); }, 1500);
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    var phoneError = document.createElement('span');
    phoneError.classList.add('error');
    phoneError.textContent = 'Phone should contain only numbers.';
    document.getElementById('phone').insertAdjacentElement('afterend', phoneError);
    setTimeout(function () { phoneError.remove(); }, 1500);
    return;
  }

  if (!name || !phone || !terms) {
    var error = document.createElement('span');
    error.classList.add('error');
    error.textContent = 'Please fill in all fields and accept the terms';
    addContactBtn.insertAdjacentElement('afterend', error);
    setTimeout(function () { error.remove(); }, 1500);
    return;
  }

  var newContact = { id: Date.now(), name: name, phone: phone };
  contacts.push(newContact);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  contactList.innerHTML = '';
  contacts.forEach(function (contact) {
    var li = document.createElement('li');
    li.classList.add('contact-item');
    li.setAttribute('data-id', contact.id);
    li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
    contactList.appendChild(li);
  });

  contactForm.reset();
};

contactList.onclick = function (e) {
  if (e.target.classList.contains('delete-btn')) {
    var contactId = e.target.parentElement.getAttribute('data-id');
    contacts = contacts.filter(function (contact) {
      return contact.id !== Number(contactId);
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    contactList.innerHTML = '';
    contacts.forEach(function (contact) {
      var li = document.createElement('li');
      li.classList.add('contact-item');
      li.setAttribute('data-id', contact.id);
      li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
      contactList.appendChild(li);
    });
  } else if (e.target.classList.contains('edit-btn')) {
    var contactId = e.target.parentElement.getAttribute('data-id');
    var contactToEdit = contacts.find(function (contact) {
      return contact.id === Number(contactId);
    });
    document.getElementById('name').value = contactToEdit.name;
    document.getElementById('phone').value = contactToEdit.phone;

    addContactBtn.textContent = 'Update Contact';
    addContactBtn.onclick = function () {
      var updatedName = document.getElementById('name').value.trim();
      var updatedPhone = document.getElementById('phone').value.trim();

      if (!/^[A-Za-z\s]+$/.test(updatedName)) {
        var nameError = document.createElement('span');
        nameError.classList.add('error');
        nameError.textContent = 'Name should contain only letters.';
        document.getElementById('name').insertAdjacentElement('afterend', nameError);
        setTimeout(function () { nameError.remove(); }, 1500);
        return;
      }

      if (!/^[0-9]+$/.test(updatedPhone)) {
        var phoneError = document.createElement('span');
        phoneError.classList.add('error');
        phoneError.textContent = 'Phone should contain only numbers.';
        document.getElementById('phone').insertAdjacentElement('afterend', phoneError);
        setTimeout(function () { phoneError.remove(); }, 1500);
        return;
      }

      contacts = contacts.map(function (contact) {
        return contact.id === Number(contactId) ? { ...contact, name: updatedName, phone: updatedPhone } : contact;
      });

      localStorage.setItem('contacts', JSON.stringify(contacts));
      contactList.innerHTML = '';
      contacts.forEach(function (contact) {
        var li = document.createElement('li');
        li.classList.add('contact-item');
        li.setAttribute('data-id', contact.id);
        li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        contactList.appendChild(li);
      });

      contactForm.reset();
      addContactBtn.textContent = 'Add Contact';
    };
  }
};

filterInput.oninput = function () {
  var filterValue = '';
  var filteredContacts =[] 
  contactList.innerHTML = '';
  filteredContacts.forEach(function (contact) {
    var li = document.createElement('li');
    li.classList.add('contact-item');
    li.setAttribute('data-id', contact.id);
    li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
    contactList.appendChild(li);
  });
};

clearFilterBtn.onclick = function () {
  filterInput.value = '';
  contactList.innerHTML = '';
};

contacts.forEach(function (contact) {
  var li = document.createElement('li');
  li.classList.add('contact-item');
  li.setAttribute('data-id', contact.id);
  li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
  contactList.appendChild(li);
});