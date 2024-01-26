import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

export const addressValidationSchema = yup.object({
  country: yup.string().required(ValidationHints.REQUIRED),
  city: yup.string().required(ValidationHints.REQUIRED),
  street: yup.string().required(ValidationHints.REQUIRED),
  buildingNumber: yup.string().required(ValidationHints.REQUIRED),
});
