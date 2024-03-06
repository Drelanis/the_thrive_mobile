import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

import { CompanyDirectionType } from '$configs';

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
  isValid: boolean;
  directions: CompanyDirectionType[] | null;
};
