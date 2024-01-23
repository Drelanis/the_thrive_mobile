import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { Alert } from 'react-native';

import { companyApi } from '$app/api';
import { useRedirect } from '$common';

type Params<Type extends FieldValues> = {
  getValues: UseFormGetValues<Type>;
};

export const useLogic = <Type extends FieldValues>(params: Params<Type>) => {
  const { getValues } = params;
  const { bottomNavigationRedirect, signUpRedirect } = useRedirect();

  const onSubmit = async () => {
    const values = getValues();

    const company = await companyApi.findOne(values.email);

    if (!company) {
      Alert.alert("Email or password isn't correct");
      return;
    }

    bottomNavigationRedirect();
  };

  return { onSubmit, signUpRedirect };
};
