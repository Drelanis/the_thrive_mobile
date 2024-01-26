import { VStack } from '@gluestack-ui/themed';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SignUpStoreType } from '$app/stores';
import { Input, InputType } from '$ui';

type Props = {
  control: Control<SignUpStoreType['address']>;
};

export const Form = (props: Props) => {
  const { control } = props;

  return (
    <VStack style={styles.container}>
      <Input
        type={InputType.TEXT}
        placeholder="Enter your country"
        control={control}
        name="country"
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter your city"
        control={control}
        name="city"
      />
      <Input
        type={InputType.TEXT}
        placeholder="Enter your street"
        control={control}
        name="street"
      />
      <Input
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
