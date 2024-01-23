import { Center, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export const Ideas = () => {
  return (
    <Center style={styles.container}>
      <Text>Ideas Screen</Text>
      <Text>Still in progress</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
