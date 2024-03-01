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

// TODO Fetch items from Server
export const COUNTRIES = [
  {
    value: 'Ukraine',
    label: 'Ukraine',
  },
  {
    value: 'USA',
    label: 'USA',
  },
];

export const COMPANY_DIRECTIONS = [{}];
