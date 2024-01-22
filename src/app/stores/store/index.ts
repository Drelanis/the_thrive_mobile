import { create } from 'zustand';

import { ScreensForms, Setters, ZustandStore } from './types';
import { createSetters } from './utils';

export const createMultiScreenStore = <Type extends ScreensForms>(
  forms: Type,
): ZustandStore<Type> => {
  return create<Type & Setters<Type>>((set) => {
    const setters = createSetters(forms, set);

    return { ...forms, ...setters };
  });
};

export * from './types';
