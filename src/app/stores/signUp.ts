import { createMultiScreenStore } from './store';

export type SignUpStoreType = {
  signUp: {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    directions: (string | undefined)[];
    location: string;
    numberOfEmployees: string;
  };
  address: {
    country: string;
    city: string;
    street: string;
    buildingNumber: string;
  };
};

export const signUpStore: SignUpStoreType = {
  signUp: {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    directions: [],
    location: '',
    numberOfEmployees: '',
  },
  address: {
    country: '',
    city: '',
    street: '',
    buildingNumber: '',
  },
};

export const useSignUpCreationStore = createMultiScreenStore(signUpStore);
