import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { signInValidationSchema } from './validation';

import { signInStore } from '$app/stores';
import { useRedirect } from '$common';
import { Routes, SignInResponseType } from '$configs';

export const useLogic = () => {
  const { bottomNavigationRedirect, signUpRedirect } = useRedirect();

  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm({
    values: {
      email: 'denysbadaka@gmail.com',
      password: '123456',
    },
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const values = getValues();

    const { data } = await axios.get<SignInResponseType>(Routes.SIGN_IN, {
      params: { ...values },
    });
    if (typeof data === 'string') {
      Alert.alert('Something went wrong');

      return;
    }
    if (data.isError) {
      Alert.alert("Email or password isn't correct");

      return;
    }

    bottomNavigationRedirect();
  };

  return { onSubmit, signUpRedirect, control, isValid };
};
