import axios from 'axios';
import { Alert } from 'react-native';

import { useRedirect } from './useRedirect';

import { SignInStoreType } from '$app/stores';
import { ResponseType, Routes } from '$configs';

export const useSignIn = () => {
  const { bottomNavigationRedirect } = useRedirect();

  const onSingIn = async (signInDto: SignInStoreType) => {
    const { data } = await axios.post<ResponseType>(Routes.SIGN_IN, {
      ...signInDto,
    });

    if (data.isError) {
      Alert.alert(data.message || '');

      return;
    }

    bottomNavigationRedirect();
  };

  return { onSingIn };
};
