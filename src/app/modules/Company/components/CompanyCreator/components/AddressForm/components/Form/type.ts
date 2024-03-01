import {
  ArrayPath,
  Control,
  FieldArrayWithId,
  FieldValues,
  UseFieldArrayAppend,
  UseFieldArrayRemove,
  UseFormSetValue,
} from 'react-hook-form';

export type FormProps<Type extends FieldValues> = {
  control: Control<Type>;
  fields: FieldArrayWithId<Type, ArrayPath<Type>, 'id'>[];
  append: UseFieldArrayAppend<Type, ArrayPath<Type>>;
  remove: UseFieldArrayRemove;
  setValue: UseFormSetValue<Type>;
};
