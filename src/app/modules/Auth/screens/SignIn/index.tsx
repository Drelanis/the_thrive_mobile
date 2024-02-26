import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

import { SignInForm } from './components';
import { useLogic } from './useLogic';

import { ScreenBackground } from '$common';
import { Button, ButtonVariants, KeyboardAvoidingView } from '$ui';

export const SignIn = () => {
  const { onSubmit, signUpRedirect, control, isValid, isTwoFactor } =
    useLogic();

  return (
    <ScreenBackground>
      <KeyboardAvoidingView>
        <VStack style={styles.container}>
          <Heading>SIGN IN</Heading>
          <Text>Enter your email and password</Text>
          <SignInForm control={control} isTwoFactor={isTwoFactor} />
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
    </ScreenBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    gap: 50,
  },
  signUpContainer: {
    alignItems: 'center',
    gap: 5,
  },
  signUpButton: {
    width: 'auto',
  },
});
