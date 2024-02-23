import { ScrollView, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { useLogic } from './useLogic';

import { ScreenBackground } from '$app/packages/common';
import {
  ArrowLeft,
  Button,
  Header,
  Input,
  InputType,
  KeyboardAvoidingView,
} from '$ui';

export const SignUp = () => {
  const styles = useStyles();

  const { goBack } = useNavigation();

  const { control, isValid, onSubmit } = useLogic();

  return (
    <ScreenBackground>
      <KeyboardAvoidingView>
        <Header
          goBack={goBack}
          goBackIcon={ArrowLeft}
          title="COMPANY REGISTRATION"
        />
        <ScrollView style={styles.container}>
          <VStack style={styles.form}>
            <Input
              type={InputType.TEXT}
              placeholder="Enter your first name"
              control={control}
              name="firstName"
            />
            <Input
              type={InputType.TEXT}
              placeholder="Enter your first name"
              control={control}
              name="lastName"
            />
            <Input
              type={InputType.TEXT}
              placeholder="Enter your last email"
              control={control}
              name="email"
            />
            <Input
              type={InputType.PASSWORD}
              placeholder="Enter your password"
              control={control}
              name="password"
            />
            <Input
              type={InputType.PASSWORD}
              placeholder="Repeat your password"
              control={control}
              name="repeatPassword"
            />
            <Button
              style={styles.button}
              isDisabled={!isValid}
              onPress={onSubmit}
            >
              REGISTRATE
            </Button>
          </VStack>
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenBackground>
  );
};

const useStyles = () => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    form: {
      gap: 40,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      marginBottom: 20,
    },
  });

  return styles;
};
