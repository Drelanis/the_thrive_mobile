import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const resetPasswordSchema = yup.object({
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
});
