import { Heading, VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { AddressForm, SelectDirections } from './components';
import { companyValidationSchema } from './validation';

import { Button, Input } from '$app/packages/ui';
import { useCompanyCreationStore } from '$app/stores/company';

export const CompanyCreator = () => {
  const { company } = useCompanyCreationStore();

  const {
    control,
    getValues,
    resetField,
    setValue,
    formState: { isValid, errors },
    trigger,
  } = useForm({
    defaultValues: company,
    resolver: yupResolver(companyValidationSchema),
    mode: 'onChange',
  });

  useEffect(() => {
    trigger(['address', 'directions']);
  }, [company.address, company.directions, trigger]);

  return (
    <VStack style={styles.container}>
      <Heading>Create company</Heading>
      <Input
        control={control}
        name="name"
        placeholder="Enter your company name"
      />
      <Input control={control} name="email" placeholder="Enter your email" />
      <Input
        control={control}
        name="numberOfEmployee"
        placeholder="Enter the number of employees"
      />
      <AddressForm
        control={control}
        name="address"
        isValid={Boolean(errors.directions)}
        getValues={getValues}
        resetField={resetField}
        setValue={setValue}
        initialState={company.address}
      />
      <SelectDirections
        control={control}
        name="directions"
        initialState={company.directions}
        getValues={getValues}
        resetField={resetField}
        isValid={Boolean(errors.directions)}
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
