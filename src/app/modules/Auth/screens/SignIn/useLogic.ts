import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { signInValidationSchema } from './validation';

import { SessionContext } from '$app/layout/providers/auth';
import { signInStore } from '$app/stores';
import { useRedirect, useSignIn } from '$common';

export const useLogic = () => {
  const { signUpRedirect } = useRedirect();

  const { onSingIn, isTwoFactor } = useSignIn();

  const { session } = useContext(SessionContext);
  const { bottomNavigationRedirect } = useRedirect();

  const {
    control,
    getValues,
    formState: { isValid },
    setValue,
  } = useForm({
    // TODO Delete values
    values: {
      email: 'denysbadaka@gmail.com',
      password: '123456',
      isTwoFactor: false,
    },
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    if (session) {
      bottomNavigationRedirect();
    }
    if (isTwoFactor) {
      setValue('isTwoFactor', true, { shouldValidate: true });
    }
  }, [session, bottomNavigationRedirect, isTwoFactor, setValue]);

  const onSubmit = async () => {
    const { email, password, twoFactorCode } = getValues();

    await onSingIn({ email, password, twoFactorCode });
  };

  return {
    onSubmit,
    signUpRedirect,
    isTwoFactor,
    control,
    isValid,
  };
};
