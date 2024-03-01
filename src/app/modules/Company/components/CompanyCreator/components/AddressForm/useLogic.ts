import { useEffect, useState } from 'react';
import { ArrayPath, FieldValues, useFieldArray } from 'react-hook-form';

import { AddressFormProps } from './types';

import { OfficeAddressType } from '$app/stores';
import { useModal } from '$common';

export const useLogic = <Type extends FieldValues>(
  params: Omit<AddressFormProps<Type>, 'setValue'>,
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

  const [selectValues, setSelectValues] = useState('');

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

  const getSelectValue = (): string => {
    const { address } = getValues();

    return address.map(
      (field: OfficeAddressType) => `${field.country}, ${field.street}`,
    );
  };

  const onSubmit = () => {
    setSelectValues(getSelectValue());

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
