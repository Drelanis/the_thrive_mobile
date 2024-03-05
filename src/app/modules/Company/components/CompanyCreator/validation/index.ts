import * as yup from 'yup';

import { officeAddressValidationConfig } from '$app/stores/company/officeAddressValidationConfig';
import { Countries } from '$configs';
import { ValidationHints } from '$packages/configs';

export const addressValidationSchema = yup
  .array()
  .of(
    yup.object({
      country: yup.string().required(ValidationHints.REQUIRED),
      state: yup.string().when('country', (country: Countries[], schema) => {
        const currentCountry = country[0];
        if (!currentCountry) {
          return schema;
        }
        return officeAddressValidationConfig[currentCountry].state;
      }),
      region: yup.string().required(ValidationHints.REQUIRED),
      city: yup.string().required(ValidationHints.REQUIRED),
      street: yup.string().required(ValidationHints.REQUIRED),
      zipCode: yup.string().when('country', (country: Countries[]) => {
        const currentCountry = country[0];
        if (!currentCountry) {
          return yup.string().required(ValidationHints.REQUIRED);
        }
        return officeAddressValidationConfig[currentCountry].zipCode;
      }),
    }),
  )
  .min(1, ValidationHints.ADDRESS_EMPTY);

export const companyValidationSchema = yup.object({
  name: yup.string().required(ValidationHints.REQUIRED),
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  numberOfEmployee: yup.string().required(ValidationHints.REQUIRED),
  address: addressValidationSchema,
  directions: yup.array().min(1, ValidationHints.DIRECTION_EMPTY),
});
