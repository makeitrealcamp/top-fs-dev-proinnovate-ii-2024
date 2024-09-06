import { LocalStorageKey } from "./data.js";

function getFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(LocalStorageKey[key])) || null;
}

function setLocalStorageValue(key, value) {
  localStorage.setItem(LocalStorageKey[key], JSON.stringify(value));
}

function getValueById(id) {
  return document
    .getElementById(id)
    .value.replace(/[&<>"'/]/g, function (match) {
      var map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
      };
      return map[match];
    })
    .trim();
}

function showErrorSpan(element, message) {
  var errorSpan = document.createElement("span");
    errorSpan.classList.add("error");
    errorSpan.textContent = message;
    element.insertAdjacentElement("afterend", errorSpan);
    setTimeout(function () {
      errorSpan.remove();
    }, 1500);
}

export { getFromLocalStorage, setLocalStorageValue, getValueById, showErrorSpan };
