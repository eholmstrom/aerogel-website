export const validName = name => name.length > 1

export const validPersonalNumber = id => id.length >= 10

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export const validEmail = email => email.match(emailRegex)

// consult with backend for a password standard
// const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
export const validPassword = pw => !!(pw && pw.length > 5 && pw.length < 255)

export const validAddress = address => address.length > 1

const postNumberRegex = /^[0-9]{5}/i
export const validPostNumber = p => p.match(postNumberRegex)

export const validCity = city => city.length > 1

// https://stackoverflow.com/questions/20678300/sweden-phone-number-regular-expression
const phoneNumberRegex = /^([+]46|0)\s*(7[02369])\s*(\d{4})\s*(\d{3})$/
export const validPhoneNumber = pn => pn.match(phoneNumberRegex)

export const personalInfoFields = (values) => {
  const errors = {}
  const validators = {
    personalNumber: {
      func: validPersonalNumber,
      msg: 'Invalid national ID',
    },
    firstName: {
      func: validName,
      msg: 'Invalid first name',
    },
    lastName: {
      func: validName,
      msg: 'Invalid last name',
    },
    address: {
      func: validAddress,
      msg: 'Invalid street address',
    },
    postNumber: {
      func: validPostNumber,
      msg: 'Invalid postal code',
    },
    city: {
      func: validCity,
      msg: 'Invalid city name',
    },
    phoneNumber: {
      func: validPhoneNumber,
      msg: 'Invalid phone number',
    },
    email: {
      func: validEmail,
      msg: 'Invalid email address',
    },
    emailValidation: { func: () => null, msg: null },
    password: {
      func: validPassword,
      msg: 'Invalid password',
    },
    passwordValidation: { func: () => null, msg: null },
    shirtSize: { func: () => null, msg: null },
    startOfStudies: { func: () => null, msg: null },
  }

  Object.keys(validators).forEach((field) => {
    const value = values[field]
    if (!value) {
      errors[field] = 'This field is required.'
    } else if (value && !validators[field].func(value)) {
      errors[field] = validators[field].msg
    }
  })

  if (values.email && values.emailValidation && values.email !== values.emailValidation) {
    errors.emailValidation = 'Email addresses must match.'
  }

  if (
    values.password &&
    values.passwordValidation &&
    values.password !== values.passwordValidation
  ) {
    errors.passwordValidation = 'Passwords must match.'
  }

  return errors
}

export const karnevalInfoFields = (values) => {
  const errors = {}

  const email = values.bff
  if (email && !validEmail(email)) errors.bff = 'Invalid email'

  // check that atleast one role has been chosen

  return errors
}

export const settingsFields = values => ({ ...personalInfoFields(values), ...karnevalInfoFields(values) })
