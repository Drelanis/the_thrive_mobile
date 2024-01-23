import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useMemo } from 'react';

import { Screens, ScreenStackType } from '$layout/types';

type NavigateKeysType = {
  [Key in keyof ScreenStackType as `${Uncapitalize<string & Key>}Redirect`]: () => void;
};

export const useRedirect = () => {
  const { navigate } = useNavigation<StackNavigationProp<ScreenStackType>>();

  const navigateHandlers = useMemo(() => {
    const handlers: Partial<NavigateKeysType> = {};

    Object.values(Screens).forEach((route) => {
      const modifiedRoute = route.charAt(0).toLowerCase() + route.slice(1);

      const navigateKeys = `${modifiedRoute}Redirect` as keyof NavigateKeysType;

      handlers[navigateKeys] = () => navigate(route);
    });

    return handlers as NavigateKeysType;
  }, [navigate]);

  return navigateHandlers;
};
