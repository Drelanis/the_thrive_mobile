import { View } from '@gluestack-ui/themed';
import {
  DrawerContentComponentProps,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

import { Screens, ScreenStackType } from '$configs';
import { LogOutIcon } from '$ui';

export const LogoutItem = (props: DrawerContentComponentProps) => {
  const { navigate } = useNavigation<StackNavigationProp<ScreenStackType>>();

  const handleLogout = () => {
    navigate(Screens.SIGN_IN);
  };

  return (
    <View style={styles.container} {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.drawerItem}
        label="Logout"
        onPress={handleLogout}
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
