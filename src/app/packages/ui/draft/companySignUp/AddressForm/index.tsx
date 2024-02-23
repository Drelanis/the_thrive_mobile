import { FieldValues } from 'react-hook-form';

import { Form } from './components';
import { AddressFormProps } from './types';
import { useLogic } from './useLogic';

import { ArrowLeft, Button, FullScreenModal, Select } from '$ui';

export const AddressForm = <Type extends FieldValues>(
  props: AddressFormProps<Type>,
) => {
  const { control, name, setValue, ...restProps } = props;

  const {
    onSubmit,
    formControl,
    isValid,
    isOpen,
    onCloseHandler,
    onOpenHandler,
    setFormValue,
    isRemote,
  } = useLogic({ name, setValue, ...restProps });

  return (
    <>
      <Select
        onPress={onOpenHandler}
        label="Set the address"
        control={control}
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
            setValue={setFormValue}
            control={formControl}
            isRemote={isRemote}
          />
        }
        footer={
          <Button isDisabled={!isValid} onPress={onSubmit}>
            Apply
          </Button>
        }
      />
    </>
  );
};
