import { useEffect, useMemo } from 'react';
import { ArrayPath, FieldValues, useFieldArray } from 'react-hook-form';

import { AddressFormProps } from './types';

import { CompanyCreatorStoreType, OfficeAddressType } from '$app/stores';
import { useCompanyCreationStore } from '$app/stores/company';
import { useModal } from '$common';

export const useLogic = <Type extends FieldValues>(
  params: Omit<AddressFormProps<Type>, 'setValue' | 'setCountry'>,
) => {
  const {
    name,
    control,
    getValues,
    resetField,
    initialState,
    trigger,
    isValid,
  } = params;

  const { company, setCompany } = useCompanyCreationStore();

  const { fields, append, remove } = useFieldArray({
    control,
    name: name as ArrayPath<Type>,
  });

  useEffect(() => {
    trigger(name);
  }, [isValid, trigger, name, fields]);

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name,
    getValues,
    resetField,
    initialState,
  });

  const selectValues = useMemo(() => {
    return company.address.map(
      (field: OfficeAddressType) => `${field.country}, ${field.street}`,
    );
  }, [company.address]);

  const onSubmit = () => {
    const values = getValues();
    setCompany(values as unknown as CompanyCreatorStoreType);

    onApplyHandler();
  };

  return {
    onSubmit,
    append,
    remove,
    fields,
    isOpen,
    onCloseHandler,
    onOpenHandler,
    getValues,
    selectValues,
  };
};
