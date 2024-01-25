import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useForm } from 'react-hook-form';

import { signUpValidationSchema } from './validation';

import { companyApi } from '$app/api';
import { signUpStore, SignUpStoreType } from '$app/stores';
import { Screens, ScreenStackType } from '$layout/types';

export const useLogic = () => {
  const { navigate } = useNavigation<StackNavigationProp<ScreenStackType>>();
  const {
    control,
    getValues,
    resetField,
    formState: { isValid },
    reset,
  } = useForm<SignUpStoreType['signUp']>({
    resolver: yupResolver(signUpValidationSchema),
    defaultValues: signUpStore.signUp,
    mode: 'onChange',
  });

  const onSubmit = async () => {
    const { name, email, password } = getValues();
    const data = await companyApi.create({
      id: `${Math.random()}`,
      name,
      email,
      password,
      currency_id: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(data);
    navigate(Screens.SIGN_IN);
    reset();
  };

  return {
    control,
    getValues,
    resetField,
    isValid,
    onSubmit,
  };
};
