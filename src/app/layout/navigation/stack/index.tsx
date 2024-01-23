import { createStackNavigator } from '@react-navigation/stack';

import { Screens } from '../../types';
import { DrawerNavigation } from '../Drawer';

import { SignIn } from '$modules';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screens.SIGN_IN}
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screens.MAIN}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};
