import { FieldValues } from 'react-hook-form';

import { SelectDirectionsProps } from './types';
import { useLogic } from './useLogic';

import { useModal } from '$common';
import { ArrowLeft, Button, CheckboxGroup, FullScreenModal, Select } from '$ui';

export const SelectDirections = <Type extends FieldValues>(
  props: SelectDirectionsProps<Type>,
) => {
  const { control, name, trigger, isValid, ...restProps } = props;

  const { isOpen, onApplyHandler, onCloseHandler, onOpenHandler } = useModal({
    name,
    ...restProps,
  });

  const { options } = useLogic({ trigger, name, isValid });

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
        body={
          <CheckboxGroup
            control={control}
            name={name}
            options={options || []}
          />
        }
        footer={<Button onPress={onApplyHandler}>Apply</Button>}
      />
    </>
  );
};
