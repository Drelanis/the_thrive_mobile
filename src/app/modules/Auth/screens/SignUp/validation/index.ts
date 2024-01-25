import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const signUpValidationSchema = yup.object({
  name: yup.string().required(ValidationHints.REQUIRED),
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  password: yup.string().required(ValidationHints.REQUIRED),
  repeatPassword: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .test(
      'passwords-match',
      ValidationHints.PASSWORDS_MISMATCH,
      function (value) {
        return this.parent.password === value;
      },
    ),
  directions: yup
    .array(yup.string())
    .required()
    .min(1, ValidationHints.REQUIRED),
  numberOfEmployees: yup.string().required(ValidationHints.REQUIRED),
});
