import { FieldValues } from 'react-hook-form';

import { SelectDirectionsProps } from './types';
import { useLogic } from './useLogic';

import { ArrowLeft, Button, CheckboxGroup, FullScreenModal, Select } from '$ui';

export const SelectDirections = <Type extends FieldValues>(
  props: SelectDirectionsProps<Type>,
) => {
  const { isValid, name, control, ...restProps } = props;

  const {
    selectValue,
    onSubmit,
    isOpen,
    onCloseHandler,
    onOpenHandler,
    options,
  } = useLogic({
    name,
    control,
    ...restProps,
  });

  return (
    <>
      <Select
        onPress={onOpenHandler}
        name={name}
        control={control}
        label="Choose directions"
        value={selectValue}
      />
      <FullScreenModal
        isOpen={isOpen}
        hasBodyPadding
        header={{
          goBackIcon: ArrowLeft,
          title: 'Directions',
          goBack: onCloseHandler,
        }}
        body={<CheckboxGroup control={control} name={name} options={options} />}
        footer={
          <Button isDisabled={isValid} onPress={onSubmit}>
            Apply
          </Button>
        }
      />
    </>
  );
};
