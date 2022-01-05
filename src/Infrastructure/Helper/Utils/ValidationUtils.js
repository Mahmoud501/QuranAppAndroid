/**
 * @flow
 */

/**
 * Check if given name is valid or not.
 * Valid name will be:
 *  - Min 2 characters.
 *  - Max 100 characters.
 *  - Contains only Arabic letters, English letters, spaces and numbers.
 *
 * @param {string} name The name to check validation for.
 * @returns If given name match requirements or not.
 */
export function isValidName(name?: ?string): boolean {
  if (name && name.length) {
    if (name.length < 2 || name.length > 100) {
      return false;
    }
    // return true;
    return /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(name) == true
      ? false
      : true;
  }

  return false;
}

/**
 * Check if given email is valid or not.
 *
 * @param {string} email The email to check validation for.
 * @returns If given email match requirements or not.
 */
export function isValidEmail(email?: ?string): boolean {
  if (email && email.length) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return reg.test(email);
  }

  return false;
}

/**
 * Check if given phone is valid or not.
 * Valid phone will be:
 *  - Min 8 characters.
 *  - Max 12 characters.
 *  - Contains only numbers.
 *
 * @param {string} phone The phone to check validation for.
 * @returns If given phone match requirements or not.
 */
export function isValidPhone(phone?: ?string): boolean {
  const nameRegex = new RegExp(/^[0-9\b]+$/);
  if (nameRegex.test(phone)) {
    if (phone && phone.length) {
      if (phone.length < 8 || phone.length > 14) {
        return false;
      }
      return /^\d+$/.test(phone);
    }
  }

  return false;
}

/**
 * Check if given age is valid or not.
 * Valid age will be:
 *  - Max 3 characters.
 *  - Contains only numbers.
 *
 * @param {string} age The age to check validation for.
 * @returns If given age match requirements or not.
 */
export function isValidAge(age?: ?string): boolean {
  if (age && age.length) {
    if (age.length > 3) {
      return false;
    }

    return /^\d+$/.test(age);
  }

  return false;
}

/**
 * Check if given place is valid or not.
 * Valid place will be:
 *  - from 1 to 50 characters.
 *
 * @param {string} (city,region) The place to check validation for.
 * @returns If given place match requirements or not.
 */
export function isValidPlace(place?: ?string): boolean {
  if (place) {
    if (place.length >= 1 && place.length <= 50) {
      if (place.match(/\d/)) {
        return false;
      }
      return true;
    }
  }
  return false;
}

/**
 * Check if given place is valid or not.
 * Valid place will be:
 *  - from 2 to unlimit characters.
 *
 * @param {string} code The place to check validation for.
 * @returns If given place match requirements or not.
 */
export function isValidPostCode(code?: ?string): boolean {
  if (code) {
    if (code.length >= 2) {
      return true;
    }
  }
  return false;
}

/**
 * Check if given place is valid or not.
 * Valid place will be:
 *  - from 2 to unlimit characters.
 *
 * @param {string} address The place to check validation for.
 * @returns If given place match requirements or not.
 */
export function isValidAddress(address?: ?string): boolean {
  if (address) {
    if (address.length >= 2 && address.length <= 200) {
      return true;
    }
  }
  return false;
}

/**
 * Check if given password is valid or not.
 * Valid password will be:
 *  - Min 6 characters.
 *  - Max 20 characters.
 *  - Contains at least one letter.
 *  - Contains at least one digit.
 *
 * @param {string} password The password to check validation for.
 * @returns If given password match requirements or not.
 */
export function isValidPassword(password?: ?string): boolean {
  if (password && password.length) {
    const reg = /^(?=.*\d)(?=.*[a-zA-Z!@#$%^&*)(+=._-]).{8,30}$/;
    return reg.test(password);
  }

  return false;
}

/**
 * Check if given value is number or not.
 * Valid age will be:
 *  - Contains only numbers.
 *
 * @param {string} value check validation for.
 * @returns If given value match requirements or not.
 */
export function isValidNumber(value?: ?string): boolean {
  const nameRegex = new RegExp(/^[0-9\b]+$/);
  return nameRegex.test(value);
}

export function isValidDetail(details?: ?string): boolean {
  if (details && details.length) {
    if (details.length >= 24 && details.length <= 400) {
      return true;
    }
  }
  return false;
}
