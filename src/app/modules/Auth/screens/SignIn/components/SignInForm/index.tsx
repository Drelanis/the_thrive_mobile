import { VStack } from '@gluestack-ui/themed';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { signInValidationSchema } from '../../validation';

import { signInStore } from '$store';
import { Input, InputType } from '$ui';

export const SignInForm = () => {
  const { control } = useForm({
    defaultValues: signInStore,
    resolver: yupResolver(signInValidationSchema),
    mode: 'onChange',
  });

  return (
    <VStack style={styles.container}>
      <Input placeholder="Enter your email" control={control} name="email" />
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
