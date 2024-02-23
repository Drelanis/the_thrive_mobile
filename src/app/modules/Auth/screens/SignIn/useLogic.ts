import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { signInValidationSchema } from './validation';

import { signInStore } from '$app/stores';
import { useRedirect, useSignIn } from '$common';

export const useLogic = () => {
  const { signUpRedirect } = useRedirect();

  const { onSingIn } = useSignIn();

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
    const dto = getValues();

    await onSingIn(dto);
  };

  return { onSubmit, signUpRedirect, control, isValid };
};
