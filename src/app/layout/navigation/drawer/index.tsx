import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomNavigation } from '../Bottom';

import { LogoutItem } from './components';

import { Profile } from '$modules';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={LogoutItem}>
      <Drawer.Screen
        options={{ headerTitle: '' }}
        name="Create Idea"
        component={BottomNavigation}
      />
      <Drawer.Screen name="Employee Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
