import { ScrollView } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

import { CompanyCreator } from './components';

export const Company = () => {
  return (
    <ScrollView style={styles.container}>
      {/* <Button>Join the company</Button>
      <Text style={styles.text}>OR</Text> */}
      <CompanyCreator />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  text: {},
});
