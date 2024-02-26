import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import { SessionContext } from './auth';
import { LoadingContext } from './loader';

import { UserSessionType } from '$configs';

export const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  const [session, setSession] = useState<UserSessionType | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <LoadingContext.Provider value={{ isLoading, setLoading }}>
          <NavigationContainer>
            <SessionContext.Provider value={{ session, setSession }}>
              {children}
              <Toast />
            </SessionContext.Provider>
          </NavigationContainer>
        </LoadingContext.Provider>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};
