import {
  Input as GluestackInput,
  InputField,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { Control, FieldValues, Path, useController } from 'react-hook-form';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  placeholder?: string;
  title?: string;
};

export const Input = <Type extends FieldValues>(props: Props<Type>) => {
  const { placeholder, name, control, title } = props;

  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, control });

  return (
    <VStack>
      {title && <Text>{title}</Text>}
      <GluestackInput isInvalid={Boolean(error)} variant="underlined" size="md">
        <InputField
          value={value}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={placeholder}
        />
      </GluestackInput>
      {error && <Text>{error.message}</Text>}
    </VStack>
  );
};

export * from './InputPassword';
