import { VStack } from '@gluestack-ui/themed';
import { Control } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SignInStoreType } from '$app/stores';
import { Input, InputType } from '$ui';

type Props = {
  control: Control<SignInStoreType>;
};

export const SignInForm = (props: Props) => {
  const { control } = props;

  return (
    <VStack style={styles.container}>
      <Input
        type={InputType.TEXT}
        placeholder="Enter your email"
        control={control}
        name="email"
      />
      <Input
        placeholder="Enter your password"
        control={control}
        name="password"
        type={InputType.PASSWORD}
      />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 30,
  },
});
