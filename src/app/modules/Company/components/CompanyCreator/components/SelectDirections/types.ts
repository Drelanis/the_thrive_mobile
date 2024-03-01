import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
  UseFormTrigger,
} from 'react-hook-form';

export type OptionType = {
  value: string;
  label: string;
};

export type SelectDirectionsProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  resetField: UseFormResetField<Type>;
  trigger: UseFormTrigger<Type>;
  isValid: boolean;
};
