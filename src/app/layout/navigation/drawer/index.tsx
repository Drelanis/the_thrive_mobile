import { createDrawerNavigator } from '@react-navigation/drawer';

import { BottomNavigation } from '../Bottom';

import { LogoutItem } from './components';

import { Profile } from '$modules';
import { CreateIcon, UserIcon } from '$ui';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={LogoutItem}>
      <Drawer.Screen
        options={{
          headerTitle: '',
          drawerIcon: () => <CreateIcon />,
        }}
        name="Create Idea"
        component={BottomNavigation}
      />
      <Drawer.Screen
        name="Employee Profile"
        component={Profile}
        options={{
          drawerIcon: () => <UserIcon />,
        }}
      />
    </Drawer.Navigator>
  );
};
