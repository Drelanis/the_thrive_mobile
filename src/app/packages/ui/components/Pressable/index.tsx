import { Pressable as RNPressable, PressableProps } from 'react-native';

type Props = {
  isPressedBackground: string;
  notPressedBackground: string;
} & Pick<PressableProps, 'style' | 'children' | 'onPress'>;

export const Pressable = (props: Props) => {
  const {
    children,
    style,
    isPressedBackground,
    notPressedBackground,
    ...restProps
  } = props;

  return (
    <RNPressable
      {...restProps}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? isPressedBackground : notPressedBackground,
          ...(style as object),
        },
      ]}
    >
      {children}
    </RNPressable>
  );
};
