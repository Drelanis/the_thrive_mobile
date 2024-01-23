import { createDrawerNavigator } from '@react-navigation/drawer';

import { LogoutItem } from './components';

import { Profile } from '$modules';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={LogoutItem}>
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};
