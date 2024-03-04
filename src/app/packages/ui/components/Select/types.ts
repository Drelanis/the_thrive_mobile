import { Control, FieldValues, Path } from 'react-hook-form';
import { PressableProps } from 'react-native';

export type SelectProps<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  label: string;
  value?: string | string[];
} & Pick<PressableProps, 'onPress'>;
