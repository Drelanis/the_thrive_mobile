import { FieldValues } from 'react-hook-form';

import { Form } from './components';
import { AddressFormProps } from './types';
import { useLogic } from './useLogic';

import { ArrowLeft, Button, FullScreenModal, Select } from '$ui';

export const AddressForm = <Type extends FieldValues>(
  props: AddressFormProps<Type>,
) => {
  const { control, isValid, name, setValue, trigger, ...restProps } = props;

  const {
    onOpenHandler,
    isOpen,
    onCloseHandler,
    onSubmit,
    selectValues,
    ...restParams
  } = useLogic({
    control,
    name,
    isValid,
    trigger,
    ...restProps,
  });

  return (
    <>
      <Select
        onPress={onOpenHandler}
        label="Set the address"
        control={control}
        value={selectValues}
        name={name}
      />
      <FullScreenModal
        isOpen={isOpen}
        hasBodyPadding
        header={{
          goBackIcon: ArrowLeft,
          title: 'Address',
          goBack: onCloseHandler,
        }}
        body={
          <Form
            control={control}
            setValue={setValue}
            trigger={trigger}
            {...restParams}
          />
        }
        footer={
          <Button isDisabled={isValid} onPress={onSubmit}>
            Apply
          </Button>
        }
      />
    </>
  );
};
