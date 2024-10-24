/**
 * Validates if the provided name contains only letters and spaces.
 * 
 * @param {string} name - Name to be validated.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
export function validateName(name) {
  const nameRegex = /^[A-Za-z\s]+$/;
  return nameRegex.test(name);
}

/**
 * Validates if the provided phone contains only numbers.
 * 
 * @param {string} phone - Phone number to be validated.
 * @returns {boolean} True if the phone is valid, false otherwise.
 */
export function validatePhone(phone) {
  const phoneRegex = /^[0-9]+$/;
  return phoneRegex.test(phone);
}
