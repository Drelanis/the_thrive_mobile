import { Center, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <Center style={styles.container}>
      <Text>Home Screen</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
