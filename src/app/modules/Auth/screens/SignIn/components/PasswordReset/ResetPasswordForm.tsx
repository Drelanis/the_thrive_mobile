import { VStack } from '@gluestack-ui/themed';
import { Control, Path } from 'react-hook-form';

import { Input } from '$app/packages/ui';
import { ResetPasswordStoreType } from '$app/stores/resetPassword';

type Props = {
  control: Control<ResetPasswordStoreType>;
  name: Path<ResetPasswordStoreType>;
};

export const ResetPasswordForm = (props: Props) => {
  const { control, name } = props;

  return (
    <VStack>
      <Input placeholder="Enter your email" control={control} name={name} />
    </VStack>
  );
};
