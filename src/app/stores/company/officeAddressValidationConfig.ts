import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const officeAddressValidationConfig = {
  USA: {
    state: yup.string().required(ValidationHints.REQUIRED),
    region: yup.string().required(ValidationHints.REQUIRED),
    city: yup.string().required(ValidationHints.REQUIRED),
    street: yup.string().required(ValidationHints.REQUIRED),
    zipCode: yup.string().required(ValidationHints.REQUIRED),
  },
  Ukraine: {
    state: yup.string().nullable(),
    region: yup.string().required(ValidationHints.REQUIRED),
    city: yup.string().required(ValidationHints.REQUIRED),
    street: yup.string().required(ValidationHints.REQUIRED),
    zipCode: yup.string().required(ValidationHints.REQUIRED),
  },
};
