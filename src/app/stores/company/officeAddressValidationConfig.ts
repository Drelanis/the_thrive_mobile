import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const officeAddressValidationConfig = {
  USA: {
    state: yup.string().required(ValidationHints.REQUIRED),
    zipCode: yup
      .string()
      .matches(/^\d{4}-\d{4}$/, 'Invalid zip code format')
      .required(ValidationHints.REQUIRED),
  },
  Ukraine: {
    state: yup.string().notRequired(),
    zipCode: yup
      .string()
      .matches(/^\d{5}$/, 'Invalid zip code format')
      .required(ValidationHints.REQUIRED),
  },
};
