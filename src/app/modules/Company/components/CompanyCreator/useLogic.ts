import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { companyValidationSchema } from './validation';

import { useRedirect } from '$app/packages/common';
import { CompanyCreatorStoreType } from '$app/stores';
import {
  companyCreationInitialState,
  useCompanyCreationStore,
} from '$app/stores/company';
import { ResponseType, Routes } from '$configs';

export const useLogic = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { company, setCompany } = useCompanyCreationStore();

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
    setIsLoading(true);

    const { data } = await axios.post<ResponseType>(Routes.CREATE_COMPANY, {
      ...getValues(),
    });

    setIsLoading(false);

    if (data.isError) {
      Alert.alert(data.message);

      return;
    }

    reset(companyCreationInitialState.company);
    setCompany(getValues() as CompanyCreatorStoreType);
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
    isLoading,
  };
};
