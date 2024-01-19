import { Input, InputField, InputSlot, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

import { EyeOffIcon, EyeOnIcon } from '$ui';

export const SignInForm = () => {
  const [isVisible, setVisible] = useState(false);

  const showPassword = () => setVisible(true);

  const hidePassword = () => setVisible(false);

  return (
    <VStack style={styles.container}>
      <Input variant="underlined" size="md">
        <InputField
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Enter email"
        />
      </Input>
      <Input variant="underlined" size="md">
        <InputField
          type={isVisible ? 'text' : 'password'}
          placeholder="Enter password"
        />
        <InputSlot onPress={isVisible ? hidePassword : showPassword}>
          {isVisible && <EyeOnIcon size={20} color="black" />}
          {!isVisible && <EyeOffIcon size={20} color="black" />}
        </InputSlot>
      </Input>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 30,
  },
});
