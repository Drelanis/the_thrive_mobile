import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { signUpValidationSchema } from './validation';

import { useSignUp } from '$app/packages/common/hooks/useSignUp';
import { signUpStore, SignUpStoreType } from '$app/stores';

export const useLogic = () => {
  const { onSingUp } = useSignUp();

  const {
    control,
    getValues,
    resetField,
    formState: { isValid },
    reset,
    setValue,
  } = useForm<SignUpStoreType>({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: signUpStore,
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const signUpDto = getValues();

    await onSingUp(signUpDto);

    reset();
  };

  return {
    control,
    getValues,
    resetField,
    isValid,
    onSubmit,
    setValue,
  };
};
