import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { signInValidationSchema } from './validation';

import { companyApi } from '$app/api';
import { signInStore } from '$app/stores';
import { useRedirect } from '$common';

export const useLogic = () => {
  const { bottomNavigationRedirect, signUpRedirect } = useRedirect();

  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm({
    values: {
      email: 'testtest@gmail.com',
      password: '123456',
    },
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const values = getValues();

    const company = await companyApi.findOne(values.email);

    if (!company) {
      Alert.alert("Email or password isn't correct");
      return;
    }

    bottomNavigationRedirect();
  };

  return { onSubmit, signUpRedirect, control, isValid };
};
