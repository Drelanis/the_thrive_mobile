import { FieldValues, Path, PathValue, useController } from 'react-hook-form';

import { SingleSelectProps } from './types';

type Params<Type extends FieldValues> = Pick<
  SingleSelectProps<Type>,
  'control' | 'name' | 'setValue'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, setValue } = params;

  const {
    field: { value },
  } = useController({ control, name });

  const onChange = (selectValue: string) => {
    setValue(name, selectValue as PathValue<Type, Path<Type>>);
  };

  return { value, onChange };
};
