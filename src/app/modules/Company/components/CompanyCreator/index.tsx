import { Heading, VStack } from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { AddressForm } from './components';

import { Input } from '$app/packages/ui';
import { companyCreationInitialState } from '$app/stores/company';

export const CompanyCreator = () => {
  const {
    control,
    getValues,
    resetField,
    formState: { isValid },
  } = useForm({
    defaultValues: companyCreationInitialState,
    mode: 'onChange',
  });

  return (
    <VStack style={styles.container}>
      <Heading>Create company</Heading>
      <Input
        control={control}
        name="company.name"
        placeholder="Enter your company name"
      />
      <Input
        control={control}
        name="company.email"
        placeholder="Enter your email"
      />
      <Input
        control={control}
        name="company.numberOfEmployee"
        placeholder="Enter the number of employees"
      />
      <AddressForm
        control={control}
        name="address"
        isValid={isValid}
        getValues={getValues}
        resetField={resetField}
        initialState={companyCreationInitialState.address}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 16,
  },
});
