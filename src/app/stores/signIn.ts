export type SignInStoreType = {
  email: string;
  password: string;
  isTwoFactor: boolean;
  twoFactorCode?: string;
};

export const signInStore: SignInStoreType = {
  email: '',
  password: '',
  isTwoFactor: false,
  twoFactorCode: '',
};
