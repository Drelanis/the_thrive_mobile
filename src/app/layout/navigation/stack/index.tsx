import { createStackNavigator } from '@react-navigation/stack';

import { DrawerNavigation } from '../Drawer';

import { SignIn } from '$modules';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};
