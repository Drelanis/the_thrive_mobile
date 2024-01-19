import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';

import { MyDrawer } from '$app';

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </GluestackUIProvider>
  );
};

export default App;
