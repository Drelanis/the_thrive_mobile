import {
  Input as GluestackInput,
  InputField,
  InputSlot,
  Text,
  VStack,
} from '@gluestack-ui/themed';
import { FieldValues } from 'react-hook-form';

import { InputProps } from './types';
import { useLogic } from './useLogic';

import { EyeOffIcon, EyeOnIcon } from '$icons';

export const Input = <Type extends FieldValues>(props: InputProps<Type>) => {
  const { placeholder, name, control, title, type } = props;

  const {
    isVisible,
    value,
    error,
    isPasswordType,
    onChange,
    hidePassword,
    showPassword,
  } = useLogic({ name, control, type });

  return (
    <VStack>
      {title && <Text>{title}</Text>}
      <GluestackInput isInvalid={Boolean(error)} variant="underlined" size="md">
        <InputField
          type={type}
          value={value}
          onChangeText={onChange}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder={placeholder}
        />
        {isPasswordType && (
          <InputSlot onPress={isVisible ? hidePassword : showPassword}>
            {isVisible && <EyeOnIcon size={20} color="black" />}
            {!isVisible && <EyeOffIcon size={20} color="black" />}
          </InputSlot>
        )}
      </GluestackInput>
      {error && <Text>{error.message}</Text>}
    </VStack>
  );
};

export * from './types';
