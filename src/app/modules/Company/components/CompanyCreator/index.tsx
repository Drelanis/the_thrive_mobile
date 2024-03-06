import { Heading, VStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

import { AddressForm, SelectDirections } from './components';
import { useLogic } from './useLogic';

import { Button, Input } from '$app/packages/ui';

export const CompanyCreator = () => {
  const {
    onSubmit,
    company,
    control,
    getValues,
    resetField,
    setValue,
    isValid,
    isLoading,
    errors,
    trigger,
    directions,
  } = useLogic();

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
        isValid={Boolean(errors.address)}
        getValues={getValues}
        resetField={resetField}
        setValue={setValue}
        initialState={company.address}
        trigger={trigger}
      />
      <SelectDirections
        control={control}
        name="directions"
        initialState={company.directions}
        getValues={getValues}
        resetField={resetField}
        isValid={Boolean(errors.directions)}
        directions={directions}
      />
      <Button onPress={onSubmit} isLoading={isLoading} isDisabled={!isValid}>
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
