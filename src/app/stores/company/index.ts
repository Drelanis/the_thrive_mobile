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

export const COMPANY_DIRECTIONS = [
  {
    value: 'Technology and Software Development',
    label: 'Technology and Software Development',
  },
  {
    value: 'Healthcare and Biotechnology',
    label: 'Healthcare and Biotechnology',
  },
  {
    value: 'Finance and Fintech',
    label: 'Finance and Fintech',
  },
  {
    value: 'Telecommunications',
    label: 'Telecommunications',
  },
  {
    value: 'Another direction',
    label: 'Another direction',
  },
];

export * from './countryAddressConfig';
