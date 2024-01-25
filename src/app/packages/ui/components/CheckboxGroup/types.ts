import { Control, FieldValues, Path } from 'react-hook-form';

type CheckboxOptionsType = {
  value: string;
  label: string;
};

export type CheckboxGroupType<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  options: CheckboxOptionsType[];
};
