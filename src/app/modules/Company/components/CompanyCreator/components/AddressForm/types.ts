import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
  UseFormSetValue,
  UseFormTrigger,
} from 'react-hook-form';

import { Countries } from '$configs';

export type AddressFormProps<Type extends FieldValues> = {
  initialState: PathValue<Type, Path<Type>>;
  control: Control<Type>;
  name: Path<Type>;
  getValues: UseFormGetValues<Type>;
  resetField: UseFormResetField<Type>;
  isValid: boolean;
  setValue: UseFormSetValue<Type>;
  trigger: UseFormTrigger<Type>;
  setCountry: React.Dispatch<React.SetStateAction<Countries | null>>;
};
