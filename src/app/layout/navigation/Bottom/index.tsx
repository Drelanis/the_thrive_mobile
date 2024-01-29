import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Company, Ideas, Store } from '$modules';
import { CompanyIcon, LightBulbIcon, StoreIcon } from '$ui';

const Tab = createBottomTabNavigator();

export const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <LightBulbIcon />,
        }}
        name="Ideas"
        component={Ideas}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <StoreIcon />,
        }}
        name="Store"
        component={Store}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: () => <CompanyIcon />,
        }}
        name="Company"
        component={Company}
      />
    </Tab.Navigator>
  );
};
