import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import { resetPasswordSchema } from './validation';

import { LoadingContext } from '$app/layout/providers/loader';
import { useModal } from '$app/packages/common';
import { resetPasswordStore } from '$app/stores/resetPassword';
import { ResponseType, Routes } from '$configs';

export const useLogic = () => {
  const { setLoading } = useContext(LoadingContext);
  const {
    control,
    getValues,
    resetField,
    formState: { isValid },
  } = useForm({
    defaultValues: resetPasswordStore,
    resolver: yupResolver(resetPasswordSchema),
    mode: 'onChange',
  });

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name: 'email',
    getValues,
    resetField,
    initialState: resetPasswordStore.email,
  });

  const onSubmit = async () => {
    setLoading(true);

    const { data } = await axios.post<ResponseType>(Routes.RESET_PASSWORD, {
      ...getValues(),
    });

    setLoading(false);

    if (data.isError) {
      Alert.alert(data.message);

      return;
    }

    Toast.show({
      type: 'info',
      text1: 'Information',
      text2: data.message,
    });

    onApplyHandler();
  };

  return {
    control,
    isOpen,
    onSubmit,
    onCloseHandler,
    onOpenHandler,
    isValid,
  };
};
