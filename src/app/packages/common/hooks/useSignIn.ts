import axios from 'axios';
import { useContext } from 'react';
import { Alert } from 'react-native';

import { useRefresh } from './useRefresh';

import { LoadingContext } from '$app/layout/providers/loader';
import { SignInStoreType } from '$app/stores';
import { ResponseType, Routes } from '$configs';

export const useSignIn = () => {
  const { setLoading } = useContext(LoadingContext);
  const { refreshSession } = useRefresh();

  const onSingIn = async (signInDto: SignInStoreType) => {
    setLoading(true);

    const { data } = await axios.post<ResponseType>(Routes.SIGN_IN, {
      ...signInDto,
    });

    if (data.isError) {
      Alert.alert(data.message || '');

      return;
    }

    await refreshSession();

    setLoading(false);
  };

  return { onSingIn };
};
