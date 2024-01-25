import { Heading, ScrollView, VStack } from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SelectDirections } from './components';

import { signUpStore } from '$app/stores';
import { Input, InputType } from '$ui';

export const SignUp = () => {
  const { control, getValues, resetField } = useForm({
    defaultValues: signUpStore,
    mode: 'onChange',
  });

  const styles = useStyles();

  return (
    <ScrollView style={styles.container}>
      <VStack style={styles.form}>
        <Heading>COMPANY REGISTRATION</Heading>
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
          initialState={signUpStore.directions}
          getValues={getValues}
          resetField={resetField}
          name="directions"
          control={control}
        />
        <Input
          type={InputType.TEXT}
          placeholder="Enter your number of employees"
          control={control}
          name="numberOfEmployees"
          mask="9999"
        />
      </VStack>
    </ScrollView>
  );
};

const useStyles = () => {
  const { top } = useSafeAreaInsets();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop: top,
    },
    form: {
      gap: 16,
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
