import {
  ArrayPath,
  FieldArrayWithId,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
} from 'react-hook-form';

import { AddressFormProps } from '../../types';

export type FormProps<Type extends FieldValues> = {
  fields: FieldArrayWithId<Type, ArrayPath<Type>, 'id'>[];
  append: UseFieldArrayAppend<Type, ArrayPath<Type>>;
  remove: UseFieldArrayRemove;
} & Pick<
  AddressFormProps<Type>,
  'control' | 'setValue' | 'trigger' | 'getValues'
>;
