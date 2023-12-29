import * as yup from 'yup';
import { ALPHABETS_REGEX, INVALID_EMAIL, PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE } from '../constants';
import { maxLength, minLength, requiredMessage, validMessageForName } from '../utils';

const passwordValidationSchema = { password: yup.string().required(requiredMessage('Password')) };

const emailValidationSchema = {
  email: yup.string().email(INVALID_EMAIL).required(requiredMessage('Email'))
};

export const roleTypeSchema = {
  roleType: yup.string().required().nullable()
};

const passwordAndRepeatPasswordSchema = {
  password: yup.string().required(requiredMessage('Password')).matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match.')
    .required('Confirm your Password.')
};

const passwordAndSetPasswordSchema = {
  oldPassword: yup.string().required('Current Password is required'),
  newPassword: yup.string().required(requiredMessage('New Password')).matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match.')
    .required('Confirm your Password.')
};

export const newPasswordAndRepeatPasswordSchema = yup.object({
  newPassword: yup.string().required(requiredMessage('Password')).matches(PASSWORD_REGEX, PASSWORD_VALIDATION_MESSAGE),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('newPassword')], 'Passwords must match.')
    .required('Confirm your Password.')
});

export const loginValidationSchema = yup.object({
  ...emailValidationSchema,
  ...passwordValidationSchema
});

export const forgotPasswordValidationSchema = yup.object({ ...emailValidationSchema });

export const resetPasswordValidationSchema = yup.object({
  ...passwordAndRepeatPasswordSchema
});

export const setPasswordValidationSchema = yup.object({
  ...passwordAndSetPasswordSchema
});

const fullNameSchema = {
  fullName: yup
    .string()
    .min(2, minLength('Full name', 2))
    .max(100, maxLength('Full name', 100))
    .matches(ALPHABETS_REGEX, validMessageForName('special characters, digits and spaces at the end are not allowed'))
    .required(requiredMessage('Full name'))
};

const roleValidationSchema = { roleType: yup.string().required().nullable() };

export const inviteNewStaffSchema = (isAdmin: boolean) =>
  yup.object({
    ...emailValidationSchema,
    ...roleValidationSchema,

    customBrandId: !isAdmin
      ? yup.object().shape({
        id: yup.string().required(requiredMessage('Brand')),
        label: yup.string()
      })
      : yup.object().notRequired()
  });

export const registerUserValidationSchema = yup.object({
  ...fullNameSchema,
  ...emailValidationSchema,
  ...passwordAndRepeatPasswordSchema
});

export const calendlySchema = yup.object({
  calenderUrl: yup.string().required(requiredMessage('Please enter url'))
});

export const updateFullNameSchema = yup.object({
  ...fullNameSchema,
})

function isValidRomanNumeral(value: string) {
  const romanNumeralPattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanNumeralPattern.test(value);
}

export const promptsAndCaseSchema = yup.object().shape({
  caseNumber: yup.string().matches(/^[^\s]*$/, 'Spaces are not allowed in the string').required('Case number is required'),
  caseName: yup.string().required('Case Name is required'),
  volumeNumber: yup.string().required('Volume Number is required').test('is-roman-numeral', 'Invalid Roman numeral', isValidRomanNumeral),
  deponentsGender: yup.string().required('Gender is required'),
  promptSwitch: yup.boolean().nullable(),
  deponentsFirstName: yup.string().required("Deponent's First Name is required").matches(/^[a-zA-Z]+$/, 'Deponent\'s First Name should contain only characters'),
  deponentsLastName: yup.string().required("Deponent's Last Name is required").matches(/^[a-zA-Z]+$/, 'Deponent\'s Last Name should contain only characters'),
  deponentsTitle: yup.string().required("Deponent's Title is required").matches(/^[A-Za-z0-9.,'-]+(?: [A-Za-z0-9.,'-]+)*[A-Za-z0-9.,'-]*$/, 'Deponent\'s Title should contain only characters, comma, hyphen, and dots'),
  isConfidential: yup.bool().nullable(),
  confidentialValue: yup.string().when('isConfidential', (val) => {
    if (val[0]) {
      return yup.string().required('Confidential Value is required')
    }
    else {
      return yup.string().nullable().notRequired()
    }
  }).nullable().optional(),
  depositionDate: yup.string().required('Date is required'),
  summaryTemplate: yup.string().required('Template is required')
});

export const promptSchema = yup.object().shape({
  prompts: yup.array().of(
    yup.object().shape({
      prompt: yup.string().required('Prompt is required')
    })
  )
});
