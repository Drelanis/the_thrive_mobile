import axios from 'axios';
import { useContext, useState } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import { useRefresh } from './useRefresh';

import { LoadingContext } from '$app/layout/providers/loader';
import { SignInStoreType } from '$app/stores';
import { Routes, SignInResponseType } from '$configs';

export const useSignIn = () => {
  const { setLoading } = useContext(LoadingContext);
  const [isTwoFactor, setIsTwoFactor] = useState(false);

  const { refreshSession } = useRefresh();

  const onSingIn = async (signInDto: Omit<SignInStoreType, 'isTwoFactor'>) => {
    const { data } = await axios.post<SignInResponseType>(Routes.SIGN_IN, {
      ...signInDto,
    });

    if (data.isError) {
      Alert.alert(data.message);

      return;
    }

    if (data.isTwoFactor) {
      setLoading(false);

      setIsTwoFactor(true);

      Toast.show({
        type: 'info',
        text1: 'Information',
        text2: data.message,
      });

      return;
    }

    await refreshSession();

    setLoading(false);
  };

  return { onSingIn, isTwoFactor };
};
