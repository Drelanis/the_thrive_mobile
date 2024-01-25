import { useMemo } from 'react';
import { FieldValues, useController } from 'react-hook-form';

import { Checkbox } from './components';
import { CheckboxGroupType } from './types';

type Params<Type extends FieldValues> = Pick<
  CheckboxGroupType<Type>,
  'control' | 'name' | 'options'
>;

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { name, control, options } = params;

  const {
    field: { value: values, onChange },
  } = useController({ control, name });

  const checkboxes = useMemo(() => {
    return options.map(({ label, value }, index) => (
      <Checkbox key={index} ariaLabel={label} value={value} />
    ));
  }, [options]);

  return { values, onChange, checkboxes };
};
