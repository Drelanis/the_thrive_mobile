import axios from 'axios';
import { useCallback, useContext } from 'react';

import { useRedirect } from './useRedirect';

import { SessionContext } from '$app/layout/providers/auth';
import { Routes, UserSessionType } from '$configs';

export const useRefresh = () => {
  const { setSession } = useContext(SessionContext);
  const { bottomNavigationRedirect, signInRedirect } = useRedirect();

  const refreshSession = useCallback(async () => {
    const { data } = await axios.get<UserSessionType>(Routes.REFRESH_SESSION);

    if (data.user) {
      setSession({ ...data });

      bottomNavigationRedirect();

      return;
    }

    signInRedirect();

    setSession(null);
  }, [bottomNavigationRedirect, setSession, signInRedirect]);

  return { refreshSession };
};
