export type SignUpStoreType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
};

export const signUpStore: SignUpStoreType = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};
