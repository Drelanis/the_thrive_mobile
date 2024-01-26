import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
} from 'react-hook-form';

export type AddressFormProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  resetField: UseFormResetField<Type>;
  setValue: UseFormSetValue<Type>;
};