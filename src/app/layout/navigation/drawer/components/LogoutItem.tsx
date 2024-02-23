import { View } from '@gluestack-ui/themed';
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { StyleSheet } from 'react-native';

import { useLogic } from './useLogic';

import { LogOutIcon } from '$ui';

export const LogoutItem = (props: DrawerContentComponentProps) => {
  const { onLogout } = useLogic();

  return (
    <View style={styles.container} {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.drawerItem}
        label="Logout"
        onPress={onLogout}
        icon={LogOutIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginTop: 64,
    marginBottom: 32,
  },
  drawerItem: {
    marginTop: 'auto',
  },
});
