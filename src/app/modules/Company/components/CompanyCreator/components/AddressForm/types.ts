import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

export type AddressFormProps<Type extends FieldValues> = {
  initialState: PathValue<Type, Path<Type>>;
  control: Control<Type>;
  name: Path<Type>;
  getValues: UseFormGetValues<Type>;
  resetField: UseFormResetField<Type>;
  isValid: boolean;
};
