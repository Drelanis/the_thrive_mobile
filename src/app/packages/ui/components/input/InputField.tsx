import { InputField as GluestackInputField } from '@gluestack-ui/themed';
import { TextInputMask } from 'react-native-masked-text';

import { InputType } from './types';

type Props = {
  isVisible: boolean;
  value: string;
  onChange: () => void;
  type: InputType;
  placeholder?: string;
  mask?: string;
  isPasswordType?: boolean;
};

export const InputField = (props: Props) => {
  const {
    isVisible,
    value,
    onChange,
    placeholder,
    type,
    mask,
    isPasswordType,
  } = props;

  const inputProps = {
    placeholder,
    type,
    secureTextEntry: isPasswordType,
    autoCapitalize: 'none',
  };

  if (mask) {
    return (
      <TextInputMask
        type="custom"
        customTextInput={GluestackInputField}
        customTextInputProps={inputProps}
        options={{ mask }}
        onChangeText={onChange}
        value={value}
      />
    );
  }

  return (
    <GluestackInputField
      type={isVisible ? InputType.TEXT : type}
      value={value}
      onChangeText={onChange}
      autoCorrect={false}
      autoCapitalize="none"
      placeholder={placeholder}
    />
  );
};
