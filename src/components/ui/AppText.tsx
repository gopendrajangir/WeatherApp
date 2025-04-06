import { TextProps, Text } from "react-native";
import React from "react";
import { TextUtilStyleProps, UtilStyleProps } from "@/hooks/useUtilStyles";
import useCustomTextStyles from "@/hooks/useCustomTextStyles";

export interface AppTextProps
  extends TextProps,
    UtilStyleProps,
    TextUtilStyleProps {}

const AppText: React.FC<AppTextProps> = ({ children, style, ...props }) => {
  const containerStyle = useCustomTextStyles(props, style);

  return (
    <Text style={containerStyle} {...props}>
      {children}
    </Text>
  );
};

export default AppText;
