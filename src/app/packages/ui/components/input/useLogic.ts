import { useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { InputProps, InputType } from './types';

type Params<Type extends FieldValues> = Pick<
  InputProps<Type>,
  'name' | 'control' | 'type'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, type } = params;

  const [isVisible, setVisible] = useState(false);

  const showPassword = () => setVisible(true);

  const hidePassword = () => setVisible(false);

  const isPasswordType = type === InputType.PASSWORD;

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return {
    value,
    error,
    isVisible,
    isPasswordType,
    showPassword,
    hidePassword,
    onChange,
  };
};
