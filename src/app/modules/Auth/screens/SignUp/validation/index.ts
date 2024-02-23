import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const signUpValidationSchema = yup.object({
  firstName: yup.string().required(ValidationHints.REQUIRED),
  lastName: yup.string().required(ValidationHints.REQUIRED),
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  password: yup.string().required(ValidationHints.REQUIRED).min(6),
  repeatPassword: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .test(
      'passwords-match',
      ValidationHints.PASSWORDS_MISMATCH,
      function (value) {
        return this.parent.password === value;
      },
    )
    .min(6),
});
