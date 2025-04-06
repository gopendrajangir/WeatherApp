import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";

import useCustomViewStyles from "@/hooks/useCustomViewStyles";
import { UtilStyleProps } from "@/hooks/useUtilStyles";

export interface AppTouchableOpacityProps
  extends TouchableOpacityProps,
    UtilStyleProps {}

const AppTouchableOpacity: React.FC<AppTouchableOpacityProps> = ({
  children,
  style,
  ...props
}) => {
  const containerStyle = useCustomViewStyles(props, style);

  return (
    <TouchableOpacity style={containerStyle} {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default AppTouchableOpacity;
