import { VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

import { Input, InputPassword } from '$ui';

export const SignInForm = () => {
  return (
    <VStack style={styles.container}>
      <Input placeholder="Enter your email" />
      <InputPassword />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 30,
  },
});
