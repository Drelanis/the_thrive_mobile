import { createStackNavigator } from '@react-navigation/stack';
import { useContext, useEffect } from 'react';

import { DrawerNavigation } from '../Drawer';

import { LoadingContext } from '$app/layout/providers/loader';
import { ScreenLoader, useRefresh } from '$app/packages/common';
import { Screens } from '$configs';
import { SignIn, SignUp } from '$modules';

const Stack = createStackNavigator();

export const StackNavigation = () => {
  const { refreshSession } = useRefresh();
  const { isLoading } = useContext(LoadingContext);

  useEffect(() => {
    refreshSession();
  }, [refreshSession]);

  if (isLoading) {
    return <ScreenLoader />;
  }

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
        options={{
          headerShown: false,
          gestureEnabled: false,
          animationEnabled: false,
        }}
        name={Screens.MAIN}
        component={DrawerNavigation}
      />
    </Stack.Navigator>
  );
};
