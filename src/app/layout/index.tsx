import { Text, View } from 'react-native';

import { AppProviders } from '../providers';

export const App = () => {
  return (
    <AppProviders>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Article Screen</Text>
      </View>
    </AppProviders>
  );
};
