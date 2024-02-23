import { config } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { NavigationContainer } from '@react-navigation/native';
import { PropsWithChildren, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { SessionContext } from './auth';

import { UserSessionType } from '$configs';

export const AppProviders = (props: PropsWithChildren) => {
  const { children } = props;

  const [session, setSession] = useState<UserSessionType | null>(null);

  return (
    <SafeAreaProvider>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <SessionContext.Provider value={{ session, setSession }}>
            {children}
          </SessionContext.Provider>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaProvider>
  );
};
