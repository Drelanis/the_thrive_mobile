import { Pressable as RNPressable, PressableProps } from 'react-native';

type Props = {
  isPressedBackground: string;
  notPressedBackground: string;
} & Pick<PressableProps, 'style' | 'children'>;

export const Pressable = (props: Props) => {
  const { children, style, isPressedBackground, notPressedBackground } = props;

  return (
    <RNPressable
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
