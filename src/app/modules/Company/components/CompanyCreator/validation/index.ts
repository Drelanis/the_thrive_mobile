import * as yup from 'yup';

import { ValidationHints } from '$packages/configs';

const companyValidationSchema = yup.object({
  name: yup.string().required(ValidationHints.REQUIRED),
  email: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .email(ValidationHints.INVALID_EMAIL),
  numberOfEmployee: yup.string().required(ValidationHints.REQUIRED),
});

const officeAddressValidationSchema = yup.object({
  country: yup
    .string()
    .required(ValidationHints.REQUIRED)
    .oneOf(['Ukraine', 'USA'], ValidationHints.INCORRECT_VALUE),
  state: yup.string().required(ValidationHints.REQUIRED),
  region: yup.string().required(ValidationHints.REQUIRED),
  city: yup.string().required(ValidationHints.REQUIRED),
  street: yup.string().required(ValidationHints.REQUIRED),
  zipCode: yup.string().required(ValidationHints.REQUIRED),
});

export const companyCreationValidationSchema = yup.object({
  company: companyValidationSchema,
  address: yup
    .array()
    .of(officeAddressValidationSchema)
    .min(1, ValidationHints.ADDRESS_EMPTY),
});
