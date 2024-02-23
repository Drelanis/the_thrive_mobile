import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const addressValidationSchema = yup.object({
  country: yup.string().required(ValidationHints.REQUIRED),
  remote: yup.boolean().required(),
  city: yup.string().when('remote', {
    is: false,
    then: (schema) => schema.required(ValidationHints.REQUIRED),
    otherwise: (schema) => schema,
  }),
  street: yup.string().when('remote', {
    is: false,
    then: (schema) => schema.required(ValidationHints.REQUIRED),
    otherwise: (schema) => schema,
  }),
  buildingNumber: yup.string().when('remote', {
    is: false,
    then: (schema) => schema.required(ValidationHints.REQUIRED),
    otherwise: (schema) => schema,
  }),
});
