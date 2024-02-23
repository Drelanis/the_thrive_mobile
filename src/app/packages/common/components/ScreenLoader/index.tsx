import { Text, View } from '@gluestack-ui/themed';
import { ActivityIndicator, StyleSheet } from 'react-native';

export const ScreenLoader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
      <Text>Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
