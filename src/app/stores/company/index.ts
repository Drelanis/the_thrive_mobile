import {
  CompanyCreatorInitialStateType,
  CompanyCreatorStoreType,
  DirectionType,
  OfficeAddressType,
} from '../types';

export const officeAddressStore: OfficeAddressType = {
  country: '',
  state: '',
  region: '',
  city: '',
  street: '',
  zipCode: '',
};

const companyCreatorStore: CompanyCreatorStoreType = {
  name: '',
  email: '',
  numberOfEmployee: '',
  address: [],
  directions: '',
};

export const companyDirection: DirectionType = {
  id: '',
  name: '',
  description: '',
};

export const companyCreationInitialState: CompanyCreatorInitialStateType = {
  company: companyCreatorStore,
  address: [],
};
