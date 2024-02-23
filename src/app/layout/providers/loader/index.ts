import { createContext, Dispatch, SetStateAction } from 'react';

export type LoadingContextType = {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
};

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setLoading: () => {},
});
