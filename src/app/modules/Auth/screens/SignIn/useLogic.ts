import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { Alert } from 'react-native';

import { companyApi } from '$app/api';
import { Screens, ScreenStackType } from '$layout/types';

type Params<Type extends FieldValues> = {
  getValues: UseFormGetValues<Type>;
};

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
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
