import { useState } from 'react';
import { ArrayPath, FieldValues, useFieldArray } from 'react-hook-form';

import { AddressFormProps } from './types';

import { OfficeAddressType } from '$app/stores';
import { useModal } from '$common';

export const useLogic = <Type extends FieldValues>(
  params: Omit<AddressFormProps<Type>, 'isValid'>,
) => {
  const { name, control, getValues, resetField, initialState } = params;

  const [selectValues, setSelectValues] = useState('');

  const { fields, append, remove } = useFieldArray({
    control,
    name: name as ArrayPath<Type>,
  });

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
