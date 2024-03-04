import { FieldValues } from 'react-hook-form';

import { SelectDirectionsProps } from './types';

import { COMPANY_DIRECTIONS } from '$app/stores/company';
import { useModal } from '$common';
import { ArrowLeft, Button, CheckboxGroup, FullScreenModal, Select } from '$ui';

export const SelectDirections = <Type extends FieldValues>(
  props: SelectDirectionsProps<Type>,
) => {
  const { control, name, isValid, ...restProps } = props;

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
        body={
          <CheckboxGroup
            control={control}
            name={name}
            options={COMPANY_DIRECTIONS || []}
          />
        }
        footer={
          <Button isDisabled={isValid} onPress={onApplyHandler}>
            Apply
          </Button>
        }
      />
    </>
  );
};
