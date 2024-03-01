import { VStack } from '@gluestack-ui/themed';
import { Control, UseFormSetValue } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SignUpStoreType } from '$app/stores';
import { Checkbox, Input, InputType } from '$ui';

type Props = {
  control: Control<SignUpStoreType['address']>;
  setValue: UseFormSetValue<SignUpStoreType['address']>;
  isRemote: boolean;
};

export const Form = (props: Props) => {
  const { control, setValue, isRemote } = props;

  return (
    <VStack style={styles.container}>
      <Input
        type={InputType.TEXT}
        placeholder="Enter your country"
        control={control}
        name="country"
      />
      <Checkbox
        control={control}
        setValue={setValue}
        name="remote"
        value="remote"
        ariaLabel="Is remote ?"
      />
      <Input
        isDisabled={isRemote}
        type={InputType.TEXT}
        placeholder="Enter your city"
        control={control}
        name="city"
      />
      <Input
        isDisabled={isRemote}
        type={InputType.TEXT}
        placeholder="Enter your street"
        control={control}
        name="street"
      />
      <Input
        isDisabled={isRemote}
        type={InputType.TEXT}
        placeholder="Enter your building number"
        control={control}
        name="buildingNumber"
        mask="999999"
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 30,
  },
});
