import { FieldValues } from 'react-hook-form';

import { FormProps } from '../../type';

export type FormFieldProps<Type extends FieldValues> = {
  index: number;
  remove: () => void;
} & Pick<FormProps<Type>, 'control' | 'setValue'>;
