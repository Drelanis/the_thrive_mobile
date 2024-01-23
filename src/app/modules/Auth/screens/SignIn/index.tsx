import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SignInForm } from './components';
import { useLogic } from './useLogic';
import { signInValidationSchema } from './validation';

import { signInStore } from '$app/stores';
import { Button, ButtonVariants, KeyboardAvoidingView } from '$ui';

export const SignIn = () => {
  const {
    control,
    getValues,
    formState: { isValid },
  } = useForm({
    values: {
      email: 'testtest@gmail.com',
      password: '123456',
    },
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  const { onSubmit, signUpRedirect } = useLogic({ getValues });

  return (
    <KeyboardAvoidingView>
      <VStack style={styles.container}>
        <Heading>SIGN IN</Heading>
        <Text>Enter your email and password</Text>
        <SignInForm control={control} />
        <Button onPress={onSubmit} isDisabled={!isValid}>
          LOGIN
        </Button>
        <HStack style={styles.signUpContainer}>
          <Text>Don&apos;t have an account?</Text>
          <Button
            onPress={signUpRedirect}
            style={styles.signUpButton}
            variant={ButtonVariants?.LINK}
          >
            Sign up
          </Button>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
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
  signUpContainer: {
    alignItems: 'center',
    gap: 5,
  },
  signUpButton: {
    width: 'auto',
  },
});
