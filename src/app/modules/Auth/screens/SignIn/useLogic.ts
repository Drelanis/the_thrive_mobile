import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { UseFormGetValues } from 'react-hook-form';
import { Alert } from 'react-native';

import { companyApi } from '$app/api';
import { SignInStoreType } from '$app/store';
import { Screens, ScreenStackType } from '$layout/types';

type Params = {
  getValues: UseFormGetValues<SignInStoreType>;
};

export const useLogic = (params: Params) => {
  const { getValues } = params;
  const { navigate } = useNavigation<StackNavigationProp<ScreenStackType>>();

  const onSubmit = async () => {
    const values = getValues();
    const company = await companyApi.findOne(values.email);
    if (!company) {
      Alert.alert("Email or password isn't correct");
      return;
    }
    navigate(Screens.HOME);
  };

  return { onSubmit };
};
