import { Countries } from '$configs';

export type DirectionType = {
  id: string;
  name: string;
  description: string;
};

export type OfficeAddressType = {
  country: Countries | '';
  state: string;
  region: string;
  city: string;
  street: string;
  zipCode: string;
};

export type CompanyCreatorStoreType = {
  name: string;
  email: string;
  numberOfEmployee: string;
  address: OfficeAddressType[];
  directions: string[];
};

export type CompanyCreatorInitialStateType = {
  company: CompanyCreatorStoreType;
};
