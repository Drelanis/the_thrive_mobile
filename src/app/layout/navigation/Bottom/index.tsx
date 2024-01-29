import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { StoreIcon } from '$app/packages/ui';
import { Company, Ideas, Store } from '$modules';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{ headerShown: false }}
        name="Ideas"
        component={Ideas}
      />
      <Tab.Screen
        options={{ headerShown: false, tabBarIcon: () => <StoreIcon /> }}
        name="Store"
        component={Store}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Company"
        component={Company}
      />
    </Tab.Navigator>
  );
};
