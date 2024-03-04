import { useMemo } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { handleSelectedValues } from './helpers';
import { SelectProps } from './types';

type Params<Type extends FieldValues> = Pick<
  SelectProps<Type>,
  'name' | 'control' | 'value'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { name, control, value } = params;

  const {
    field: { value: controlValue },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputValues = useMemo(() => {
    return handleSelectedValues(value ?? controlValue);
  }, [value, controlValue]);

  return { inputValues, error };
};
