import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  password: yup.string().required(ValidationHints.REQUIRED),
});
