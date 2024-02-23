import { createStackNavigator } from '@react-navigation/stack';
import { useEffect } from 'react';

import { DrawerNavigation } from '../Drawer';

import { useRefresh } from '$app/packages/common';
import { Screens } from '$configs';
import { SignIn, SignUp } from '$modules';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const { refreshSession } = useRefresh();

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name={Screens.SIGN_IN}
        component={SignIn}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={Screens.SIGN_UP}
        component={SignUp}
      />
      <Stack.Screen
        options={{ headerShown: false, gestureEnabled: false }}
        name={Screens.MAIN}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};
