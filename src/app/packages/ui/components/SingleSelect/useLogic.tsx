import { SelectItem } from '@gluestack-ui/themed';
import { useMemo } from 'react';
import { FieldValues, Path, PathValue, useController } from 'react-hook-form';

import { SingleSelectProps } from './types';

type Params<Type extends FieldValues> = Pick<
  SingleSelectProps<Type>,
  'control' | 'name' | 'setValue' | 'items'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { control, name, setValue, items } = params;

  const {
    field: { value },
    fieldState: { invalid, error },
  } = useController({ control, name });

  const onChange = (selectValue: string) => {
    setValue(name, selectValue as PathValue<Type, Path<Type>>, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const selectItems = useMemo(() => {
    return items.map((item, index) => (
      <SelectItem key={index} label={item.label} value={item.value} />
    ));
  }, [items]);

  return {
    value,
    onChange,
    isInvalid: invalid,
    errorMessage: error?.message,
    selectItems,
  };
};
