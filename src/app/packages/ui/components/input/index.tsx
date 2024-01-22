import {
  Input as GluestackInput,
  InputField,
  InputSlot,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed';
import { FieldError, FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { InputProps, InputType } from './types';
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

  const styles = useStyles(error);

  return (
    <VStack>
      {title && <Text>{title}</Text>}
      <GluestackInput isInvalid={Boolean(error)} variant="underlined" size="md">
        <InputField
          type={isVisible ? InputType.PASSWORD : InputType.TEXT}
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
      {error && (
        <View style={styles.helperContainer}>
          <Text style={styles.helper}>{error.message}</Text>
        </View>
      )}
    </VStack>
  );
};

const useStyles = (error?: FieldError) => {
  const styles = StyleSheet.create({
    helperContainer: {
      height: error ? 0 : 24,
    },
    helper: {
      lineHeight: 24,
      height: 24,
    },
  });

  return styles;
};

export * from './types';
