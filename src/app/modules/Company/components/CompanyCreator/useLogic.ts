import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { companyValidationSchema } from './validation';

import { LoadingContext } from '$app/layout/providers/loader';
import { useRedirect } from '$app/packages/common';
import { useCompanyCreationStore } from '$app/stores/company';
import { ResponseType, Routes } from '$configs';

export const useLogic = () => {
  const { setLoading } = useContext(LoadingContext);

  const { company } = useCompanyCreationStore();

  const { ideasRedirect } = useRedirect();

  const {
    control,
    getValues,
    resetField,
    setValue,
    formState: { isValid, errors },
    trigger,
    watch,
    reset,
  } = useForm({
    defaultValues: company,
    resolver: yupResolver(companyValidationSchema),
    mode: 'onChange',
  });

  const addressWatch = watch().address;

  useEffect(() => {
    trigger(['address', 'directions']);
  }, [addressWatch, trigger]);

  const onSubmit = async () => {
    setLoading(true);

    const { data } = await axios.post<ResponseType>(Routes.CREATE_COMPANY, {
      ...getValues(),
    });

    setLoading(false);

    if (data.isError) {
      Alert.alert(data.message);
      return;
    }

    reset();
    ideasRedirect();
  };

  return {
    onSubmit,
    company,
    control,
    getValues,
    resetField,
    setValue,
    isValid,
    errors,
    trigger,
  };
};
