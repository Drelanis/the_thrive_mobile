import { useState } from 'react';

export const useLogic = () => {
  const [isVisible, setVisible] = useState(false);

  const showPassword = () => setVisible(true);

  const hidePassword = () => setVisible(false);

  return {
    isVisible,
    showPassword,
    hidePassword,
  };
};
