import { createStackNavigator } from '@react-navigation/stack';

import { AppProviders } from './providers';

import { SignIn } from '$modules/Auth';
import { Home } from '$modules/Home';

const Stack = createStackNavigator();

export const App = () => {
  return (
    <AppProviders>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignIn"
          component={SignIn}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
      </Stack.Navigator>
    </AppProviders>
  );
};
