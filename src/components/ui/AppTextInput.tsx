import { TextInput, TextInputProps } from "react-native";
import React from "react";
import { TextUtilStyleProps, UtilStyleProps } from "@/hooks/useUtilStyles";
import useCustomTextStyles from "@/hooks/useCustomTextStyles";

export interface AppTextInputProps
  extends TextInputProps,
    UtilStyleProps,
    TextUtilStyleProps {}

const AppTextInput: React.FC<AppTextInputProps> = ({ style, ...props }) => {
  const containerStyle = useCustomTextStyles(props, style);

  return <TextInput style={containerStyle} {...props} />;
};

export default AppTextInput;
