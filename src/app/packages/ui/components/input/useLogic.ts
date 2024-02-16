import { useCallback, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { InputProps, InputType } from './types';

type Params<Type extends FieldValues> = Pick<
  InputProps<Type>,
  'name' | 'control' | 'type'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, type = InputType.TEXT } = params;

  const [isVisible, setVisible] = useState(false);

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  const isPasswordType = type === InputType.PASSWORD;

  const showPassword = useCallback(() => setVisible(true), [setVisible]);

  const hidePassword = useCallback(() => setVisible(false), [setVisible]);

  return {
    value,
    error,
    isVisible,
    isPasswordType,
    onChange,
    showPassword,
    hidePassword,
  };
};
