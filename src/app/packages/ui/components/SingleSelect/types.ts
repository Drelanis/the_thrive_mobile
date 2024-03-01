import { Control, FieldValues, Path, UseFormSetValue } from 'react-hook-form';

export type SingleSelectProps<Type extends FieldValues> = {
  helper: string;
  label: string;
  control: Control<Type>;
  name: Path<Type>;
  setValue: UseFormSetValue<Type>;
};
