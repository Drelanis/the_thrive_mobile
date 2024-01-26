import {
  Input as GluestackInput,
  InputSlot,
  Text,
  View,
  VStack,
} from '@gluestack-ui/themed';
import { FieldError, FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { InputField } from './InputField';
import { InputProps, InputType } from './types';
import { useLogic } from './useLogic';

import { EyeOffIcon, EyeOnIcon } from '$icons';

export const Input = <Type extends FieldValues>(props: InputProps<Type>) => {
  const {
    placeholder,
    name,
    control,
    title,
    type = InputType.TEXT,
    mask,
    isDisabled,
  } = props;

  const { isVisible, value, error, isPasswordType, onChange, togglePassword } =
    useLogic({ name, control, type });

  const styles = useStyles(error);

  return (
    <VStack>
      {title && <Text>{title}</Text>}
      <GluestackInput
        isDisabled={isDisabled}
        isInvalid={Boolean(error)}
        variant="underlined"
        size="md"
      >
        <InputField
          type={type}
          isVisible={isVisible}
          isPasswordType={isPasswordType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          mask={mask}
        />
        {isPasswordType && (
          <InputSlot onPress={togglePassword}>
            {isVisible && <EyeOffIcon size={20} color="black" />}
            {!isVisible && <EyeOnIcon size={20} color="black" />}
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
