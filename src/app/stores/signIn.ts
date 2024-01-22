import { createMultiScreenStore } from './store';

export type SignInStoreType = {
  signIn: {
    email: string;
    password: string;
  };
};

export const signInStore: SignInStoreType = {
  signIn: {
    email: '',
    password: '',
  },
};

const store = createMultiScreenStore(signInStore);

console.log(store.getState());
