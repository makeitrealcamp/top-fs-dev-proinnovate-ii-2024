/**
 * Sanitizes input to prevent XSS attacks by escaping HTML characters.
 * 
 * @param {string} input - Input string to be sanitized.
 * @returns {string} Sanitized input.
 */
export function sanitizeInput(input) {
  return input.replace(/[&<>"'/]/g, function (match) {
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    };
    return map[match];
  });
}

/**
 * Displays an error message below the specified element.
 * 
 * @param {string} message - The error message to display.
 * @param {HTMLElement} targetElement - The HTML element to display the error message below.
 */
export function showErrorMessage(message, targetElement) {

  const existingError = document.getElementById(targetElement);

  if (existingError && existingError.classList.contains('error')) {
    existingError.remove();
  }

  const errorElement = document.createElement('span');
  errorElement.classList.add('error');
  errorElement.textContent = message;

  existingError.insertAdjacentElement('afterend', errorElement);

  setTimeout(() => {
    if (errorElement) errorElement.remove();
  }, 5000);
}
