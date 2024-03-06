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
import { CompanyDirectionType, ResponseType, Routes } from '$configs';

export const useLogic = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [directions, setDirections] = useState<CompanyDirectionType[] | null>(
    null,
  );

  const { ideasRedirect } = useRedirect();

  const { company, setCompany } = useCompanyCreationStore();

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

  const getDirections = async () => {
    setIsLoading(true);

    const { data } = await axios.get(Routes.COMPANY_DIRECTIONS);

    setIsLoading(false);

    setDirections(data);
  };

  useEffect(() => {
    if (!directions) {
      getDirections();
    }

    trigger(['address', 'directions']);
  }, [addressWatch, trigger, directions]);

  const onSubmit = async () => {
    setIsLoading(true);

    const { data } = await axios.post<ResponseType>(Routes.CREATE_COMPANY, {
      ...getValues(),
    });

    setIsLoading(false);

    if (!data || data.isError) {
      Alert.alert(data.message);

      return;
    }

    Alert.alert(data.message);

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
    directions,
  };
};
