import { createMultiScreenStore } from './store';

export type SignUpStoreType = {
  signUp: {
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    directions: (string | undefined)[];
    numberOfEmployees: string;
  };
};

export const signUpStore: SignUpStoreType = {
  signUp: {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    directions: [],
    numberOfEmployees: '',
  },
};

export const useSignUpCreationStore = createMultiScreenStore(signUpStore);
