import {
  Button,
  ButtonIcon,
  Heading,
  HStack,
  View,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { HeaderProps } from './types';

export const Header: FC<HeaderProps> = (props) => {
  const {
    goBack,
    title,
    goBackIcon,
    rightComponent = null,
    canGoBack = true,
  } = props;

  const styles = useStyles();

  return (
    <View style={styles.view}>
      <HStack style={styles.container}>
        <HStack style={{ ...styles.left, ...styles.sides }}>
          {canGoBack && (
            <Button onPress={goBack}>
              <ButtonIcon as={goBackIcon} />
            </Button>
          )}
        </HStack>
        {title ? <Heading>{title}</Heading> : null}
        <HStack style={{ ...styles.right, ...styles.sides }}>
          {rightComponent}
        </HStack>
      </HStack>
    </View>
  );
};

export const useStyles = () => {
  const insets = useSafeAreaInsets();

  return StyleSheet.create({
    view: {
      borderBottomWidth: 1,
      marginTop: insets.top,
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 74,
    },
    left: {
      justifyContent: 'flex-start',
    },
    right: {
      justifyContent: 'flex-end',
    },
    sides: {
      display: 'flex',
      alignItems: 'center',
      padding: 8,
      gap: 10,
      width: 107.5,
    },
  });
};

export * from './types';
