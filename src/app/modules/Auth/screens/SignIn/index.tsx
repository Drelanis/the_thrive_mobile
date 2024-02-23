import { Heading, HStack, Text, VStack } from '@gluestack-ui/themed';
import { useContext, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { SignInForm } from './components';
import { useLogic } from './useLogic';

import { SessionContext } from '$app/layout/providers/auth';
import { ScreenBackground, useRedirect } from '$common';
import { Button, ButtonVariants, KeyboardAvoidingView } from '$ui';

export const SignIn = () => {
  const { onSubmit, signUpRedirect, control, isValid } = useLogic();
  const { session } = useContext(SessionContext);
  const { bottomNavigationRedirect } = useRedirect();

  useEffect(() => {
    if (session) {
      bottomNavigationRedirect();
    }
  }, [session, bottomNavigationRedirect]);

  return (
    <ScreenBackground>
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
    </ScreenBackground>
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
