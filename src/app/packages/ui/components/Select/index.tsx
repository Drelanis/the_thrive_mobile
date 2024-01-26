import { Heading, HStack, Icon, Text, VStack } from '@gluestack-ui/themed';
import { FieldError, FieldValues } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { SelectProps } from './types';
import { useLogic } from './useLogic';

import { ChevronRightCircle } from '$icons';
import { Pressable } from '$ui/components/Pressable';

export const Select = <Type extends FieldValues>(props: SelectProps<Type>) => {
  const { label, onPress, ...restProps } = props;

  const { inputValues, error } = useLogic(restProps);

  const styles = useStyles(error);

  return (
    <VStack>
      <Pressable
        isPressedBackground="rgb(210, 230, 255)"
        notPressedBackground="rgb(242, 242, 242)"
        style={styles.pressableContainer}
        onPress={onPress}
      >
        <HStack style={styles.container}>
          <VStack style={styles.inputContainer}>
            <Heading size="sm">{label}</Heading>
            <Text>{inputValues}</Text>
          </VStack>
          <Icon style={styles.icon} as={ChevronRightCircle} size="lg" />
        </HStack>
      </Pressable>
      <Text>{error?.message}</Text>
    </VStack>
  );
};

const useStyles = (error?: FieldError) => {
  const styles = StyleSheet.create({
    pressableContainer: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    container: {
      alignItems: 'center',
      width: '100%',
      paddingBottom: 16,
      borderBottomWidth: 1,
      borderColor: error?.message ? 'red' : 'black',
    },
    inputContainer: {
      gap: 4,
    },
    label: {
      width: '100%',
    },
    icon: {
      marginLeft: 'auto',
    },
  });

  return styles;
};
