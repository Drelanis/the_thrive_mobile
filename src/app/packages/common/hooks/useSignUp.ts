import axios from 'axios';
import { Alert } from 'react-native';

import { useRedirect } from './useRedirect';

import { SignUpStoreType } from '$app/stores';
import { ResponseType, Routes } from '$configs';

export const useSignUp = () => {
  const { signInRedirect } = useRedirect();

  const onSingUp = async (signUpDto: SignUpStoreType) => {
    const { data } = await axios.post<ResponseType>(Routes.SIGN_UP, {
      ...signUpDto,
    });

    if (data.isError) {
      Alert.alert("Email or password isn't correct");

      return;
    }

    signInRedirect();
  };

  return { onSingUp };
};
