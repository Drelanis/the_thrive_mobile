import { createMultiScreenStore } from '../store';
import {
  CompanyCreatorInitialStateType,
  CompanyCreatorStoreType,
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
  directions: [],
};

export const companyCreationInitialState: CompanyCreatorInitialStateType = {
  company: companyCreatorStore,
};

export const useCompanyCreationStore = createMultiScreenStore(
  companyCreationInitialState,
);

// TODO Fetch items from Server
export const ARRAY_OF_COUNTRIES: string[] = ['Ukraine', 'USA'];

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

export * from './countryAddressConfig';
