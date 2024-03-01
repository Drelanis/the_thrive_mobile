import * as yup from 'yup';

import { ARRAY_OF_COUNTRIES } from '$app/stores/company';
import { officeAddressValidationConfig } from '$app/stores/company/officeAddressValidationConfig';
import { Countries } from '$configs';
import { ValidationHints } from '$packages/configs';

const companyValidationSchema = yup.object({
  name: yup.string().required(ValidationHints.REQUIRED),
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  numberOfEmployee: yup.string().required(ValidationHints.REQUIRED),
});

const officeAddressValidationSchema = {
  country: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .oneOf(ARRAY_OF_COUNTRIES, ValidationHints.INCORRECT_VALUE),
};

const getOfficeAddressValidationSchema = (country: Countries | null) => {
  if (!country) {
    return yup.object({
      ...officeAddressValidationSchema,
    });
  }

  const addressSchema = officeAddressValidationConfig[country];

  return yup.object({
    ...officeAddressValidationSchema,
    ...addressSchema,
  });
};

export const getCompanyCreationValidationSchema = (
  country: Countries | null,
) => {
  const validationSchema = yup.object({
    company: companyValidationSchema,
    address: yup
      .array()
      .of(getOfficeAddressValidationSchema(country))
      .min(1, ValidationHints.ADDRESS_EMPTY),
    directions: yup.array().min(1, ValidationHints.DIRECTION_EMPTY),
  });

  return validationSchema;
};
