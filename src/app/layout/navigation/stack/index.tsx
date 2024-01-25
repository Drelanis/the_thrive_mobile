import { createStackNavigator } from '@react-navigation/stack';

import { Screens } from '../../types';
import { DrawerNavigation } from '../Drawer';

import { SignIn, SignUp } from '$modules';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  return (
    // TODO move Drawer Navigation to the end
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name={Screens.MAIN}
        component={DrawerNavigation}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screens.SIGN_IN}
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screens.SIGN_UP}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};