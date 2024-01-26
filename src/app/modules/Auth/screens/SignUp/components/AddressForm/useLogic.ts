import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, Path, PathValue, useForm } from 'react-hook-form';

import { AddressFormProps } from './types';
import { addressValidationSchema } from './validation';

import { signUpStore, useSignUpCreationStore } from '$app/stores';
import { useModal } from '$common';

type Params<Type extends FieldValues> = Pick<
  AddressFormProps<Type>,
  'name' | 'getValues' | 'initialState' | 'resetField' | 'setValue'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { name, setValue, ...restParams } = params;

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name,
    ...restParams,
  });

  const { setAddress } = useSignUpCreationStore();

  const {
    control: formControl,
    formState: { isValid },
    getValues,
  } = useForm({
    defaultValues: signUpStore.address,
    resolver: yupResolver(addressValidationSchema),
    mode: 'onChange',
  });

  const onSubmit = () => {
    const { country, city, street, buildingNumber } = getValues();

    const address =
      `${country}, ${city}, ${street}, ${buildingNumber}` as PathValue<
        Type,
        Path<Type>
      >;

    setAddress(getValues());
    setValue(name, address);
    onApplyHandler();
  };

  return {
    onSubmit,
    formControl,
    isValid,
    isOpen,
    onCloseHandler,
    onOpenHandler,
  };
};
