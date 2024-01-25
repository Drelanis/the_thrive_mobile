import {
  Control,
  FieldValues,
  Path,
  PathValue,
  UseFormGetValues,
  UseFormResetField,
} from 'react-hook-form';

import { useModal } from '$common';
import { ArrowLeft, Button, FullScreenModal, Select } from '$ui';

type Props<Type extends FieldValues> = {
  control: Control<Type>;
  name: Path<Type>;
  getValues: UseFormGetValues<Type>;
  initialState: PathValue<Type, Path<Type>>;
  resetField: UseFormResetField<Type>;
};

export const SelectDirections = <Type extends FieldValues>(
  props: Props<Type>,
) => {
  const { control, name, ...restProps } = props;

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name,
    ...restProps,
  });

  return (
    <>
      <Select
        onPress={onOpenHandler}
        name={name}
        control={control}
        label="Choose directions"
      />
      <FullScreenModal
        isOpen={isOpen}
        hasBodyPadding
        header={{
          goBackIcon: ArrowLeft,
          title: 'Directions',
          goBack: onCloseHandler,
        }}
        footer={<Button onPress={onApplyHandler}>Apply</Button>}
      />
    </>
  );
};
