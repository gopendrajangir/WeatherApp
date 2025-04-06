import { View, ViewProps } from "react-native";
import React from "react";
import useCustomViewStyles from "@/hooks/useCustomViewStyles";
import { UtilStyleProps } from "@/hooks/useUtilStyles";

export interface BoxProps extends ViewProps, UtilStyleProps {}

const Box: React.FC<BoxProps> = ({ children, style, ...props }) => {
  const containerStyle = useCustomViewStyles(props, style);

  return (
    <View style={containerStyle} {...props}>
      {children}
    </View>
  );
};

export default Box;
