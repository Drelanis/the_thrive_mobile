import axios from 'axios';
import { Alert } from 'react-native';

import { useRedirect } from '$app/packages/common';
import { Routes } from '$configs';

export const useLogic = () => {
  const { signInRedirect } = useRedirect();

  const onLogout = async () => {
    const { data } = await axios.get(Routes.SIGN_OUT);

    if (data.isError) {
      Alert.alert('Something went wrong');

      return;
    }

    signInRedirect();
  };

  return { onLogout };
};
