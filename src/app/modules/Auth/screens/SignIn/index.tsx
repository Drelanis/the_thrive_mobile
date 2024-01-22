import { Heading, Text, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SignInForm } from './components';
import { signInValidationSchema } from './validation';

import { signInStore } from '$store';
import { Button } from '$ui';

export const SignIn = () => {
  const {
    control,
    formState: { isValid },
  } = useForm({
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  return (
    <VStack style={styles.container}>
      <Heading>SIGN IN</Heading>
      <Text>Enter your email and password</Text>
      <SignInForm control={control} />
      <Button isDisabled={!isValid}>LOGIN</Button>
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
