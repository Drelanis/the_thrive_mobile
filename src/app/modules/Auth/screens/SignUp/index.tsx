import { Center, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export const SignUp = () => {
  return (
    <Center style={styles.container}>
      <Text>SignUp Screen</Text>
      <Text>Still in progress</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
