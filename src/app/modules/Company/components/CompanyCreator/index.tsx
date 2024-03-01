import { Heading, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { AddressForm, SelectDirections } from './components';
import { companyCreationValidationSchema } from './validation';

import { Button, Input } from '$app/packages/ui';
import { companyCreationInitialState } from '$app/stores/company';

export const CompanyCreator = () => {
  const {
    control,
    getValues,
    resetField,
    setValue,
    formState: { isValid, errors },
    trigger,
  } = useForm({
    defaultValues: companyCreationInitialState,
    resolver: yupResolver(companyCreationValidationSchema),
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
        isValid={!errors.address}
        getValues={getValues}
        resetField={resetField}
        setValue={setValue}
        initialState={companyCreationInitialState.address}
        trigger={trigger}
      />
      <SelectDirections
        control={control}
        name="directions"
        initialState={companyCreationInitialState.directions}
        getValues={getValues}
        resetField={resetField}
        trigger={trigger}
        isValid={!errors.directions}
      />
      <Button onPress={() => {}} isDisabled={!isValid}>
        Create the company
      </Button>
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 26,
  },
});
