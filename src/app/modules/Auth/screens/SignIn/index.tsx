import { Heading, Text, VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

import { SignInForm } from './components';

import { Button } from '$ui';

export const SignIn = () => {
  return (
    <VStack style={styles.container}>
      <Heading>SIGN IN</Heading>
      <Text>Enter your email and password</Text>
      <SignInForm />
      <Button>LOGIN</Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 90,
  },
});
