import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const signInValidationSchema = yup.object({
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  password: yup.string().required(ValidationHints.REQUIRED),
  isTwoFactor: yup.boolean().required(),
  twoFactorCode: yup.string().when('isTwoFactor', {
    is: (value: boolean) => value === true,
    then: (schema) =>
      schema
        .required(ValidationHints.REQUIRED)
        .matches(/^\d+$/, ValidationHints.MUST_BE_NUMERIC)
        .min(6, ValidationHints.MAX_LENGTH_6),
    otherwise: (schema) => schema,
  }),
});
