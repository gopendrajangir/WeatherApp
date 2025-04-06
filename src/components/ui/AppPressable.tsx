import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import React from "react";
import useCustomViewStyles from "@/hooks/useCustomViewStyles";
import { UtilStyleProps } from "@/hooks/useUtilStyles";

export interface AppPressableProps extends PressableProps, UtilStyleProps {
  style?: StyleProp<ViewStyle>;
}

const AppPressable: React.FC<AppPressableProps> = ({
  children,
  style,
  ...props
}) => {
  const containerStyle = useCustomViewStyles(props, style);

  return (
    <Pressable style={containerStyle} {...props}>
      {children}
    </Pressable>
  );
};

export default AppPressable;
