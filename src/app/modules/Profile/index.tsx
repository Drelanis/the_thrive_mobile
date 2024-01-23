import { Center, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

export const Profile = () => {
  return (
    <Center style={styles.container}>
      <Text>Profile Screen</Text>
    </Center>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
