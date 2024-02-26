import { StyleSheet } from 'react-native';

import { ResetPasswordForm } from './ResetPasswordForm';
import { useLogic } from './useLogic';

import { ArrowLeft, Button, ButtonVariants, FullScreenModal } from '$ui';

export const PasswordReset = () => {
  const { control, isOpen, onSubmit, onCloseHandler, onOpenHandler, isValid } =
    useLogic();

  return (
    <>
      <Button
        style={styles.resetPasswordButton}
        onPress={onOpenHandler}
        variant={ButtonVariants?.LINK}
      >
        Forgot password?
      </Button>
      <FullScreenModal
        isOpen={isOpen}
        hasBodyPadding
        header={{
          goBackIcon: ArrowLeft,
          title: 'Reset password',
          goBack: onCloseHandler,
        }}
        body={<ResetPasswordForm control={control} name="email" />}
        footer={
          <Button isDisabled={!isValid} onPress={onSubmit}>
            Confirm
          </Button>
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  resetPasswordButton: {
    justifyContent: 'flex-end',
  },
});
