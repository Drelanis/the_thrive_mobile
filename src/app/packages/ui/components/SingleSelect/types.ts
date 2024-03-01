import { Control, FieldValues, Path, UseFormSetValue } from 'react-hook-form';

export type SingleSelectProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  isValid: boolean;
  setValue: UseFormSetValue<Type>;
};
