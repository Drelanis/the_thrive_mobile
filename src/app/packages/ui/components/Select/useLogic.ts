import { FieldValues, useController } from 'react-hook-form';

import { handleSelectedValues } from './helpers';
import { SelectProps } from './types';

type Params<Type extends FieldValues> = Pick<
  SelectProps<Type>,
  'name' | 'control'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { name, control } = params;

  const {
    field: { value },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const inputValues = handleSelectedValues(value);

  return { inputValues, error };
};
