export type SignUpStoreType = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  directions: string[];
  locations: string[];
  numberOfEmployees: string;
};

export const signUpStore: SignUpStoreType = {
  name: '',
  email: '',
  password: '',
  repeatPassword: '',
  directions: [],
  locations: [],
  numberOfEmployees: '',
};
