import { $Keys } from 'utility-types';

import { ScreensForms, Setters, Store } from '../types';

import { capitalize } from '$utils';

export const createSetters = <Type extends ScreensForms>(
  forms: Type,
  set: (value: Store<Type>, replace: boolean) => void,
): Setters<Type> => {
  const screenNames: $Keys<Type>[] = Object.keys(forms);

  const setters = screenNames.reduce((setterAccumulator, screenName) => {
    const name = `set${capitalize(screenName as string)}`;

    const setter = (form: Type[typeof screenName]) =>
      set({ [screenName]: form } as unknown as Store<Type>, false);

    return { ...setterAccumulator, [name]: setter };
  }, {});

  return setters as Setters<Type>;
};
