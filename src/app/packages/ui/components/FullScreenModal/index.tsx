import {
  Modal as GluestackModal,
  ModalBackdrop,
  ModalBody,
  ModalContent,
  ModalFooter,
} from '@gluestack-ui/themed';
import { FC } from 'react';
import { StyleSheet } from 'react-native';

import { Header, HeaderProps } from '../Header';

import { JsxElement, ScreenBackground } from '$common';

type Props = {
  header: HeaderProps;
  isOpen: boolean;
  body?: JsxElement;
  footer?: JsxElement;
  hasBodyPadding?: boolean;
};

export const FullScreenModal: FC<Props> = (props) => {
  const { footer, body, isOpen, header, hasBodyPadding } = props;

  return (
    <GluestackModal size="full" isOpen={isOpen}>
      <ModalBackdrop />
      <ModalContent style={styles.content}>
        <ScreenBackground>
          <Header {...header} />
          <ModalBody style={!hasBodyPadding && styles.body}>{body}</ModalBody>
          <ModalFooter style={styles.footer}>{footer}</ModalFooter>
        </ScreenBackground>
      </ModalContent>
    </GluestackModal>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  footer: {
    gap: 16,
    paddingBottom: 33,
  },
  body: {
    paddingHorizontal: 0,
  },
});
