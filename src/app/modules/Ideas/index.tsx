import { Center } from '@gluestack-ui/themed';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Select } from '$ui';

export const Ideas = () => {
  const { control } = useForm({
    values: {
      select: [''],
    },
  });

  const a = () => console.log('lox');

  return (
    <Center style={styles.container}>
      {/* <Text>Ideas Screen</Text>
      <Text>Still in progress</Text> */}
      <Select
        name="select"
        control={control}
        label="Simple label"
        onPress={a}
      />
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
