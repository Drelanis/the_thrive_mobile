import { ScrollView, VStack } from '@gluestack-ui/themed';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

import { AddressForm, SelectDirections } from './components';
import { useLogic } from './useLogic';

import { signUpStore } from '$app/stores';
import { ArrowLeft, Button, Header, Input, InputType } from '$ui';

export const SignUp = () => {
  const styles = useStyles();

  const { goBack } = useNavigation();

  const { control, getValues, resetField, isValid, onSubmit, setValue } =
    useLogic();

  return (
    <>
      <Header
        goBack={goBack}
        goBackIcon={ArrowLeft}
        title="COMPANY REGISTRATION"
      />
      <ScrollView style={styles.container}>
        <VStack style={styles.form}>
          <Input
            type={InputType.TEXT}
            placeholder="Enter your company name"
            control={control}
            name="name"
          />
          <Input
            type={InputType.TEXT}
            placeholder="Enter your company email"
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
          <SelectDirections
            initialState={signUpStore.signUp.directions}
            getValues={getValues}
            resetField={resetField}
            name="directions"
            control={control}
          />
          <AddressForm
            initialState={signUpStore.signUp.location}
            getValues={getValues}
            resetField={resetField}
            control={control}
            name="location"
            setValue={setValue}
          />
          <Input
            type={InputType.TEXT}
            placeholder="Enter your number of employees"
            control={control}
            name="numberOfEmployees"
            mask="9999"
          />
          <Button isDisabled={!isValid} onPress={onSubmit}>
            REGISTRATE
          </Button>
        </VStack>
      </ScrollView>
    </>
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
  });

  return styles;
};
