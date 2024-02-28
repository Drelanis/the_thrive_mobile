import { FieldValues, Path } from 'react-hook-form';

import { Form } from './components';
import { AddressFormProps } from './types';
import { useLogic } from './useLogic';

import { ArrowLeft, Button, FullScreenModal, Select } from '$ui';

export const AddressForm = <Type extends FieldValues>(
  props: AddressFormProps<Type>,
) => {
  const {
    control,
    name,
    setValue,
    getValues,
    resetField,
    isValid,
    initialState,
  } = props;

  const {
    onOpenHandler,
    append,
    remove,
    isOpen,
    onCloseHandler,
    fields,
    onSubmit,
  } = useLogic({
    name,
    setValue,
    control,
    getValues,
    resetField,
    isValid,
    initialState,
  });

  return (
    <>
      <Select
        onPress={onOpenHandler}
        label="Set the address"
        control={control}
        name={'company.address' as Path<Type>}
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
            append={append}
            remove={remove}
            fields={fields}
            control={control}
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
