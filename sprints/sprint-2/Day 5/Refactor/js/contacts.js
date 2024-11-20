import { LocalStorageKey } from "./data.js";
import {
  getFromLocalStorage,
  setLocalStorageValue,
  getValueById,
  showErrorSpan,
} from "./utils.js";

let contacts = [];
const contactList = document.getElementById("contactList");
const filterInput = document.getElementById("filter");
const clearFilterBtn = document.getElementById("clearFilterBtn");
const addContactBtn = document.getElementById("addContactBtn");
const contactForm = document.getElementById("contacts");

function CreateContact(name, phone) {
  return { id: Date.now(), name: name, phone: phone };
}

function RenderContacts(contacts_) {
  contactList.innerHTML = "";
  contacts_.forEach(function (contact) {
    const li = document.createElement("li");
    li.classList.add("contact-item");
    li.setAttribute("data-id", contact.id);
    li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
    contactList.appendChild(li);
  });
}

function InitializeContacts() {
  // Contactos de localstorage
  contacts = getFromLocalStorage(LocalStorageKey.contacts) || [];

  // Limpiar filtro
  filterInput.value = "";

  // Renderizar contactos
  RenderContacts(contacts);
}

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = getValueById("name");
  const phone = getValueById("phone");
  const terms = document.getElementById("terms").checked;

  if (!/^[A-Za-z\s]+$/.test(name)) {
    showErrorSpan(
      document.getElementById("name"),
      "Name should contain only letters."
    );
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    showErrorSpan(
      document.getElementById("phone"),
      "Phone should contain only numbers."
    );
    return;
  }

  if (!name || !phone || !terms) {
    showErrorSpan(
      addContactBtn,
      "Please fill in all fields and accept the terms"
    );
    return;
  }

  const newContact = CreateContact(name, phone);
  contacts.push(newContact);
  setLocalStorageValue(LocalStorageKey.contacts, contacts);

  // Renderizar contactos
  RenderContacts(contacts);

  // Limpiar formulario
  contactForm.reset();
});

contactList.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-btn")) {
    const contactId = e.target.parentElement.getAttribute("data-id");
    contacts = contacts.filter(function (contact) {
      return contact.id !== Number(contactId);
    });

    setLocalStorageValue(LocalStorageKey.contacts, contacts);
    RenderContacts(contacts);
  } else if (e.target.classList.contains("edit-btn")) {
    const contactId = e.target.parentElement.getAttribute("data-id");
    const ind = contacts.findIndex((c) => c.id === Number(contactId));
    const contactToEdit = contacts[ind];

    document.getElementById("name").value = contactToEdit.name;
    document.getElementById("phone").value = contactToEdit.phone;

    addContactBtn.textContent = "Update Contact";
    addContactBtn.addEventListener("click", function clickEvent() {
      const updatedName = document.getElementById("name").value.trim();
      const updatedPhone = document.getElementById("phone").value.trim();

      if (!/^[A-Za-z\s]+$/.test(updatedName) || !/^[0-9]+$/.test(updatedPhone))
        return;

      // Mapping del objeto
      contacts[ind] = {
        ...contacts[ind],
        name: updatedName,
        phone: updatedPhone,
      };

      setLocalStorageValue(LocalStorageKey.contacts, contacts);
      RenderContacts(contacts);

      contactForm.reset();
      addContactBtn.textContent = "Add Contact";
      addContactBtn.removeEventListener("click", clickEvent);
    });
  }
});

filterInput.addEventListener("input", async (e) => {
  const filterValue = e.target.value;
  const filteredContacts = await new Promise((res, rej) => {
    if (filterValue == "") {
      res(contacts);
    } else {
      res(contacts.filter((c) => c.name.startsWith(filterValue)));
    }
  });

  RenderContacts(filteredContacts);
});

clearFilterBtn.addEventListener("click", () => {
  filterInput.value = "";
  RenderContacts(contacts);
});

export { RenderContacts, CreateContact, InitializeContacts };
