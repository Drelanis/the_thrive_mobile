import axios from 'axios';
import { useCallback, useContext } from 'react';

import { useRedirect } from './useRedirect';

import { SessionContext } from '$app/layout/providers/auth';
import { LoadingContext } from '$app/layout/providers/loader';
import { Routes, UserSessionType } from '$configs';

export const useRefresh = () => {
  const { setSession } = useContext(SessionContext);
  const { bottomNavigationRedirect, signInRedirect } = useRedirect();
  const { setLoading } = useContext(LoadingContext);

  const refreshSession = useCallback(async () => {
    setLoading(true);
    const { data } = await axios.get<UserSessionType>(Routes.REFRESH_SESSION);
    setLoading(false);

    if (data.user) {
      setSession(data);

      bottomNavigationRedirect();

      return;
    }

    signInRedirect();

    setSession(null);
  }, [bottomNavigationRedirect, setSession, signInRedirect, setLoading]);

  return { refreshSession };
};
