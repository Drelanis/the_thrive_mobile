import { Control, FieldValues, Path } from 'react-hook-form';

export enum InputType {
  TEXT = 'text',
  PASSWORD = 'password',
}

export type InputProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  placeholder?: string;
  title?: string;
  type?: InputType;
  mask?: string;
};
